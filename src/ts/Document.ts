namespace Neodynamic.JSESCPOSBuilder {
  export class Document {
    private _buffer: number[] = [];
    public model: PrinterModel = PrinterModel.Generic;
    public encoding = 858;
    public width: number = 48;

    constructor() {
      Utils.check4CPTable();
    }

    private _addB(value: number[][]) {
      for (var i = 0; i < value.length; i++)
        this._buffer = this._buffer.concat(value[i]);
    }
    public setCharacterCodeTable(code_table: number): Document {
      if (!Utils.isValidUInt8(code_table)) throw "Invalid code table";
      this._addB([
        Constants.ESC,
        Constants.TAB,
        [code_table],
      ]);
      return this;
    }
    
    public setPrintWidth(newWidth: number): Document {
      this.width = newWidth;  
      this._addB([
        Constants.GS,
        [87],
        Utils.int16ToArray(newWidth),
      ]);
      return this;
    }

    public marginBottom(size: number): Document {
      if (!Utils.isValidUInt8(size)) throw "Invalid size";
      this._addB([Margins.BOTTOM, [size]]);
      return this;
    }

    public marginLeft(size: number): Document {
      if (!Utils.isValidUInt8(size)) throw "Invalid size";
      this._addB([Margins.LEFT, [size]]);
      return this;
    }

    public marginRight(size: number): Document {
      if (!Utils.isValidUInt8(size)) throw "Invalid size";
      this._addB([Margins.RIGHT, [size]]);
      return this;
    }

    public newLine(): Document {
      this._addB([Constants.EOL]);
      return this;
    }

    public drawLine(new_line = false): Document {
      if (new_line) this.newLine();
      this._addB([Utils.repeat("-".charCodeAt(0), this.width)]);
      return this;
    }

    public drawTable(data: string[]): Document {
      let cell_width = this.width / data.length;
      let text = "";
      for(var i = 0; i < data.length; i++) {
        text += data[i].toString();
        let spaces = cell_width - data[i].toString().length;
        text += new Array(spaces + 1).join(' ');
      }
      this._addB([cptable.utils.encode(this.encoding, text)]);
      return this;
    }

    public feed(lines: number = 1): Document {
      this._addB(Utils.repeat(Constants.EOL, lines));
      return this;
    }

    public control(sequence: FeedControlSequence): Document {
      let buf: number[][] = [];
      switch (sequence) {
        case FeedControlSequence.CarriageReturn:
          buf = [FeedControlSequences.CR];
          break;
        case FeedControlSequence.FormFeed:
          buf = [FeedControlSequences.FF];
          break;
        case FeedControlSequence.HorizontalTab:
          buf = [FeedControlSequences.HT];
          break;
        case FeedControlSequence.PrintFeedPaper:
          buf = [FeedControlSequences.GLF];
          break;
        case FeedControlSequence.PrintLineFeed:
          buf = [FeedControlSequences.LF];
          break;
        case FeedControlSequence.VerticalTab:
          buf = [FeedControlSequences.VT];
          break;
      }
      this._addB(buf);
      return this;
    }

    public align(alignment: TextAlignment): Document {
      let buf = [].concat(Constants.TXT_ALIGNMENT);
      switch (alignment) {
        case TextAlignment.Center:
          buf.push(1);
          break;
        case TextAlignment.LeftJustification:
          buf.push(0);
          break;
        case TextAlignment.RightJustification:
          buf.push(2);
          break;
      }
      this._addB([buf]);
      return this;
    }

    public font(family: FontFamily): Document {
      let buf = [].concat(Constants.TXT_FONT_FAMILY);
      switch (family) {
        case FontFamily.A:
          buf.push(0);
          break;
        case FontFamily.B:
          buf.push(1);
          break;
        case FontFamily.C:
          buf.push(2);
          break;
      }
      this._addB([buf]);
      return this;
    }

    public style(styles: Array<FontStyle>): Document {
      let buf: number[][] = [];
      if (styles.indexOf(FontStyle.Bold) > -1)
        buf.push(TextFormat.BOLD_ON);
      else buf.push(TextFormat.BOLD_OFF);
      
      if (styles.indexOf(FontStyle.Italic) > -1)
        buf.push(TextFormat.ITALIC_ON);
      else buf.push(TextFormat.ITALIC_OFF);

      if (styles.indexOf(FontStyle.Underline) > -1)
        buf.push(TextFormat.UNDERL_ON);
      else if (styles.indexOf(FontStyle.Underline2) > -1)
        buf.push(TextFormat.UNDERL2_ON);
      else buf.push(TextFormat.UNDERL_OFF);

      this._addB(buf);
      return this;
    }

    public size(width: number, height: number): Document {
      let buf = [];
      buf = TextFormat.CUSTOM_SIZE(width, height);
      this._addB([buf]);
      return this;
    }

    public charSpacing(value?: number): Document {
      let buf: number[][] = [];
      if (value || value === 0) {
        if (!Utils.isValidUInt8(value)) throw "Invalid value";
        buf.push(CharacterSpacing.SET);
        buf.push([value]);
      } else {
        buf.push(CharacterSpacing.DEFAULT);
      }
      this._addB(buf);
      return this;
    }

    public lineSpacing(value?: number): Document {
      let buf: number[][] = [];
      if (value || value === 0) {
        if (!Utils.isValidUInt8(value)) throw "Invalid value";
        buf.push(LineSpacing.SET)
        buf.push([value]);
      } else {
        buf.push(LineSpacing.DEFAULT);
      }
      this._addB(buf);
      return this;
    }

    public hardware(hardware: Hardware): Document {
      let buf = [];
      switch (hardware) {
        case Hardware.Init:
          buf = HardwareOpt.INIT;
          break;
        case Hardware.Reset:
          buf = HardwareOpt.RESET;
          break;
        case Hardware.Select:
          buf = HardwareOpt.SELECT;
          break;
      }
      this._addB([buf]);
      return this;
    }

    public linearBarcode(code: string, type: Barcode1DType,
      options: Barcode1DOptions = new Barcode1DOptions()): Document {
      let buf: number[][] = [];
      if(options.width)
        buf.push(BarcodeFormat.WIDTH(options.width));
      else
        buf.push(BarcodeFormat.WIDTH_DEFAULT);
      if(options.height)
        buf.push(BarcodeFormat.HEIGHT(options.height));
      else
        buf.push(BarcodeFormat.HEIGHT_DEFAULT);
      switch (options.font) {
        case BarcodeFont.A: {
          buf.push(BarcodeFormat.FONT_A);
        } break;
        case BarcodeFont.B: {
          buf.push(BarcodeFormat.FONT_B);
        } break;
      }
      switch (options.position) {
        case BarcodeTextPosition.Above: {
          buf.push(BarcodeFormat.TXT_ABV);
        } break;
        case BarcodeTextPosition.AboveAndBelow: {
          buf.push(BarcodeFormat.TXT_BTH);
        } break;
        case BarcodeTextPosition.Below: {
          buf.push(BarcodeFormat.TXT_BLW);
        } break;
        case BarcodeTextPosition.Off: {
          buf.push(BarcodeFormat.TXT_OFF);
        } break;
      }
      switch (type) {
        case Barcode1DType.CODE39: {
          buf.push(BarcodeFormat.CODE39);          
        } break;
        case Barcode1DType.ITF: {
          buf.push(BarcodeFormat.ITF);
        } break;
        case Barcode1DType.UPC_A: {
          buf.push(BarcodeFormat.UPC_A);
        } break;
        case Barcode1DType.UPC_E: {
          buf.push(BarcodeFormat.UPC_E);
        } break;
        case Barcode1DType.CODABAR: {
          buf.push(BarcodeFormat.CODABAR);
        } break;
        case Barcode1DType.CODE128: {
          buf.push(BarcodeFormat.CODE128);
          buf.push(Utils.codeLengthUInt16(code));
        } break;
        case Barcode1DType.CODE93: {
          buf.push(BarcodeFormat.CODE93);
          buf.push(Utils.codeLengthUInt16(code));
        } break;
        case Barcode1DType.EAN13: {
          buf.push(BarcodeFormat.EAN13);
        } break;
        case Barcode1DType.EAN8: {
          buf.push(BarcodeFormat.EAN8);
        } break;
      }
      buf.push(cptable.utils.encode(this.encoding, code));
      if (options.include_parity && type in [Barcode1DType.EAN13, Barcode1DType.EAN8])
        buf.push([Utils.getParityBit(code)]);
      buf.push([0]);
      this._addB(buf);
      return this;
    }

    private _wrapperSend2DCodeData(func: number, code_type: number, data?: string|number[], modifier?: number) {
      let buf: number[][] = [];
      let header = Utils.int16ToArray((data != undefined ? data.length : 0) + (modifier != undefined? 1 : 0) + 2);
      buf = [Constants.GS, [40, 107], header, [code_type, func]];
      if(modifier != undefined)
        buf.push([modifier]);
      if(typeof(data) == 'string')
        buf.push(cptable.utils.encode(this.encoding, data));
      else
        buf.push(data);
      this._addB(buf);
    }

    public qrCode(code: string, options: BarcodeQROptions = new BarcodeQROptions()): Document {
      let ct = 49;
      this._wrapperSend2DCodeData(65, ct, [50, 0]);       // Model QR 2
      this._wrapperSend2DCodeData(67, ct, [options.size]);        // Size
      this._wrapperSend2DCodeData(69, ct, [48 + options.level]);  // Error correction level
      this._wrapperSend2DCodeData(80, ct, code, 48);      // Send content & print
      this._wrapperSend2DCodeData(81, ct, '', 48);        
      return this;
    }

    public pdf417(code: string, options: BarcodePDF417Options = new BarcodePDF417Options()): Document {
      let ct = 48;
      this._wrapperSend2DCodeData(70, ct, [options.truncated ? 1 : 0]);
      this._wrapperSend2DCodeData(65, ct, [options.data_column_count]);
      this._wrapperSend2DCodeData(67, ct, [options.width]);
      this._wrapperSend2DCodeData(68, ct, [options.height_multiplier]);
      let error = Math.ceil(options.error_ratio * 10);
      this._wrapperSend2DCodeData(69, ct, [error], 49);
      this._wrapperSend2DCodeData(80, ct, code, 48);
      this._wrapperSend2DCodeData(81, ct, '', 48);
      return this;
    } 

    public cashDraw(pin: number = 2): Document {
      switch (pin) {
        case 2: {
          this._addB([CashDrawer.KICK_2]);
        } break;
        case 5: {
          this._addB([CashDrawer.KICK_2]);
        } break;
        default: {
          this._addB([CashDrawer.KICK_2]);
        } break;
      }
      return this;
    }

    public beep(times: number, length: number): Document {
      this._addB([Constants.BEEP, [times], [length]]);
      return this;
    }

    public cut(feed: number = 3, partial_cut: boolean = false): Document {
      let buf: number[][] = [];
      this.feed(feed);
      if (partial_cut)
        buf.push(Paper.PART_CUT);
      else
        buf.push(Paper.FULL_CUT);
      this._addB(buf);
      return this;
    }

    public setColorMode(color: boolean): Document {
      let buf: number[][] = [];
      if (color)
        buf = [Color.RED];
      else
        buf = [Color.BLACK];
      this._addB(buf);
      return this;
    }

    public reverseColors(reverse: boolean): Document {
      let buf: number[] = [];
      if (reverse)
        buf = Color.REVERSE;
      else
        buf = Color.UNREVERSE;
      this._addB([buf]);
      return this;
    }

    public raw(data: number[]): Document {
      this._addB([data]);
      return this;
    }

    public text(content: string, override_encoding?: number) : Document {
      if(!override_encoding)
        override_encoding = this.encoding
      this._addB([cptable.utils.encode(override_encoding, content), [Constants.EOL]]);
      return this;
    }

    public image(image: ESCPOSImage, density: BitmapDensity = BitmapDensity.D24): Document {
      let n = 3;
      if ([BitmapDensity.D8, BitmapDensity.S8].indexOf(density) > -1) 
        n = 1;
      let bitmap = image.toBitmap(n * 8);
      let header = [];
      switch(density) {
        case BitmapDensity.S8: {
          header = BitmapFormat.S8;
        } break;
        case BitmapDensity.D8: {
          header = BitmapFormat.D8;
        } break;
        case BitmapDensity.S24: {
          header = BitmapFormat.S24;
        } break;
        case BitmapDensity.D24: {
          header = BitmapFormat.D24;
        } break;
      }
      this.lineSpacing(0);
      let buf: number[][] = [];
      for(var i = 0; i < bitmap.data.length; i++) {
        let line = bitmap.data[i];
        buf.push(header);
        buf.push(Utils.int16ToArray(line.length / n));
        buf.push(line);
        buf.push(Constants.EOL);
      }
      this._addB(buf);
      return this.lineSpacing();
    }

    public generateUInt8Array(): Uint8Array {
      return new Uint8Array(this._buffer);
    }

    public generateArray(): number[] {
      return this._buffer;
    }
  }
}