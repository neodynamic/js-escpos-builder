var Neodynamic;
(function (Neodynamic) {
    var JSESCPOSBuilder;
    (function (JSESCPOSBuilder) {
        class Constants {
        }
        Constants.LF = [10];
        Constants.FS = [28];
        Constants.FF = [12];
        Constants.GS = [29];
        Constants.DLE = [16];
        Constants.EOT = [4];
        Constants.NUL = [0];
        Constants.ESC = [27];
        Constants.TAB = [116];
        Constants.EOL = [10];
        Constants.BEEP = [27, 66];
        Constants.TXT_ALIGNMENT = [27, 97];
        Constants.TXT_FONT_FAMILY = [27, 77];
        JSESCPOSBuilder.Constants = Constants;
        class FeedControlSequences {
        }
        FeedControlSequences.LF = [10];
        FeedControlSequences.GLF = [74, 0];
        FeedControlSequences.FF = [12];
        FeedControlSequences.CR = [13];
        FeedControlSequences.HT = [9];
        FeedControlSequences.VT = [11];
        JSESCPOSBuilder.FeedControlSequences = FeedControlSequences;
        class CharacterSpacing {
        }
        CharacterSpacing.DEFAULT = [27, 32, 0];
        CharacterSpacing.SET = [27, 32];
        JSESCPOSBuilder.CharacterSpacing = CharacterSpacing;
        class LineSpacing {
        }
        LineSpacing.DEFAULT = [27, 50];
        LineSpacing.SET = [27, 51];
        JSESCPOSBuilder.LineSpacing = LineSpacing;
        class HardwareOpt {
        }
        HardwareOpt.INIT = [27, 64];
        HardwareOpt.SELECT = [27, 61, 1];
        HardwareOpt.RESET = [27, 63, 10, 0];
        JSESCPOSBuilder.HardwareOpt = HardwareOpt;
        class CashDrawer {
        }
        CashDrawer.KICK_2 = [27, 112, 0, 25, 250];
        CashDrawer.KICK_5 = [27, 112, 1, 25, 250];
        JSESCPOSBuilder.CashDrawer = CashDrawer;
        class Margins {
        }
        Margins.BOTTOM = [27, 79];
        Margins.LEFT = [27, 108];
        Margins.RIGHT = [27, 81];
        JSESCPOSBuilder.Margins = Margins;
        class Paper {
        }
        Paper.FULL_CUT = [29, 86, 0];
        Paper.PART_CUT = [29, 86, 1];
        Paper.CUT_A = [29, 86, 65];
        Paper.CUT_B = [29, 86, 66];
        JSESCPOSBuilder.Paper = Paper;
        class TextFormat {
            static CUSTOM_SIZE(width, height) {
                if (width < 0)
                    throw "Min size 0";
                if (width > 8)
                    throw "Max size 7";
                if (height < 0)
                    throw "Min size 0";
                if (height > 8)
                    throw "Max size 7";
                return [29, 33, (width * 16) + height];
            }
            static HEIGHT(size) {
                if (size < 1)
                    throw "Min size 1";
                if (size > 7)
                    throw "Max size 7";
                return [size - 1];
            }
            static WIDTH(size) {
                if (size < 1)
                    throw "Min size 1";
                if (size > 7)
                    throw "Max size 7";
                return [(size - 1) * 16];
            }
        }
        TextFormat.NORMAL = [27, 33, 0];
        TextFormat.TWO_HEIGHT = [27, 33, 16];
        TextFormat.TWO_WIDTH = [27, 33, 32];
        TextFormat.FOUR_SQUARE = [27, 33, 48];
        TextFormat.UNDERL_OFF = [27, 45, 0];
        TextFormat.UNDERL_ON = [27, 45, 1];
        TextFormat.UNDERL2_ON = [27, 45, 2];
        TextFormat.BOLD_OFF = [27, 69, 0];
        TextFormat.BOLD_ON = [27, 69, 1];
        TextFormat.ITALIC_OFF = [27, 53];
        TextFormat.ITALIC_ON = [27, 52];
        JSESCPOSBuilder.TextFormat = TextFormat;
        class BarcodeFormat {
            static HEIGHT(height) {
                return [29, 104, height];
            }
            static WIDTH(size) {
                if (size < 1)
                    throw "Min size 1";
                if (size > 5)
                    throw "Max size 5";
                return [29, 119, size + 1];
            }
        }
        BarcodeFormat.TXT_OFF = [29, 72, 0];
        BarcodeFormat.TXT_ABV = [29, 72, 1];
        BarcodeFormat.TXT_BLW = [29, 72, 2];
        BarcodeFormat.TXT_BTH = [29, 72, 3];
        BarcodeFormat.FONT_A = [29, 102, 0];
        BarcodeFormat.FONT_B = [29, 102, 1];
        BarcodeFormat.HEIGHT_DEFAULT = [29, 104, 100];
        BarcodeFormat.WIDTH_DEFAULT = [29, 119, 1];
        BarcodeFormat.UPC_A = [29, 107, 0];
        BarcodeFormat.UPC_E = [29, 107, 1];
        BarcodeFormat.EAN13 = [29, 107, 2];
        BarcodeFormat.EAN8 = [29, 107, 3];
        BarcodeFormat.CODE39 = [29, 107, 4];
        BarcodeFormat.ITF = [29, 107, 5];
        BarcodeFormat.CODABAR = [29, 107, 6];
        BarcodeFormat.CODE93 = [29, 107, 72];
        BarcodeFormat.CODE128 = [29, 107, 73];
        JSESCPOSBuilder.BarcodeFormat = BarcodeFormat;
        class Code2DFormat {
        }
        Code2DFormat.TYPE_PDF417 = [29, 90, 0];
        Code2DFormat.TYPE_DATAMATRIX = [29, 90, 1];
        Code2DFormat.TYPE_QR = [29, 90, 2];
        Code2DFormat.CODE2D = [27, 90];
        Code2DFormat.QR_LEVEL_L = [76];
        Code2DFormat.QR_LEVEL_M = [77];
        Code2DFormat.QR_LEVEL_Q = [81];
        Code2DFormat.QR_LEVEL_H = [72];
        JSESCPOSBuilder.Code2DFormat = Code2DFormat;
        class ImageFormat {
        }
        ImageFormat.NORMAL = [29, 118, 48, 0];
        ImageFormat.DOUBLE_WIDTH = [29, 118, 48, 1];
        ImageFormat.DOUBLE_HEIGHT = [29, 118, 48, 2];
        ImageFormat.QUAD = [29, 118, 48, 3];
        JSESCPOSBuilder.ImageFormat = ImageFormat;
        class BitmapFormat {
        }
        BitmapFormat.S8 = [27, 42, 0];
        BitmapFormat.D8 = [27, 42, 1];
        BitmapFormat.S24 = [27, 42, 32];
        BitmapFormat.D24 = [27, 42, 33];
        JSESCPOSBuilder.BitmapFormat = BitmapFormat;
        class GSV0Format {
        }
        GSV0Format.NORMAL = [29, 118, 48, 0];
        GSV0Format.DW = [29, 118, 48, 1];
        GSV0Format.DH = [29, 118, 48, 2];
        GSV0Format.DWDH = [29, 118, 48, 3];
        JSESCPOSBuilder.GSV0Format = GSV0Format;
        class Color {
        }
        Color.BLACK = [27, 114, 0];
        Color.RED = [27, 114, 1];
        Color.REVERSE = [29, 66, 49];
        Color.UNREVERSE = [29, 66, 48];
        JSESCPOSBuilder.Color = Color;
        class Screen {
        }
        Screen.BS = [8];
        Screen.HT = [9];
        Screen.LF = [10];
        Screen.US_LF = [31, 10];
        Screen.HOM = [11];
        Screen.CR = [13];
        Screen.US_CR = [31, 13];
        Screen.US_B = [31, 66];
        Screen.US_$ = [31, 36];
        Screen.CLR = [12];
        Screen.CAN = [24];
        Screen.US_MD1 = [31, 1];
        Screen.US_MD2 = [31, 2];
        Screen.US_MD3 = [31, 3];
        Screen.US_C = [31, 67];
        Screen.US_E = [31, 69];
        Screen.US_T = [31, 84];
        Screen.US_U = [31, 85];
        Screen.US_X = [31, 88];
        Screen.US_r = [31, 114];
        Screen.US_v = [31, 118];
        JSESCPOSBuilder.Screen = Screen;
        class Barcode1DOptions {
            constructor(width, height, include_parity = true, position = JSESCPOSBuilder.BarcodeTextPosition.Below, font = JSESCPOSBuilder.BarcodeFont.A) {
                this.position = JSESCPOSBuilder.BarcodeTextPosition.Below;
                this.include_parity = true;
                this.font = JSESCPOSBuilder.BarcodeFont.A;
                this.width = width;
                this.height = height;
                this.position = position;
                this.include_parity = include_parity;
                this.font = font;
            }
        }
        JSESCPOSBuilder.Barcode1DOptions = Barcode1DOptions;
        class BarcodePDF417Options {
            constructor(width = 3, height_multiplier = 3, data_column_count = 0, error_ratio = 0.1, truncated = false) {
                this.width = 3;
                this.height_multiplier = 3;
                this.data_column_count = 0;
                this.error_ratio = 0.1;
                this.truncated = false;
                this.width = width;
                this.height_multiplier = height_multiplier;
                this.data_column_count = data_column_count;
                this.error_ratio = error_ratio;
                this.truncated = truncated;
            }
        }
        JSESCPOSBuilder.BarcodePDF417Options = BarcodePDF417Options;
        class BarcodeQROptions {
            constructor(level = JSESCPOSBuilder.QRLevel.L, size = 6) {
                this.level = JSESCPOSBuilder.QRLevel.L;
                this.size = 6;
                this.level = level;
                this.size = size;
            }
        }
        JSESCPOSBuilder.BarcodeQROptions = BarcodeQROptions;
    })(JSESCPOSBuilder = Neodynamic.JSESCPOSBuilder || (Neodynamic.JSESCPOSBuilder = {}));
})(Neodynamic || (Neodynamic = {}));
var Neodynamic;
(function (Neodynamic) {
    var JSESCPOSBuilder;
    (function (JSESCPOSBuilder) {
        class Document {
            constructor() {
                this._buffer = [];
                this.model = JSESCPOSBuilder.PrinterModel.Generic;
                this.encoding = 858;
                this.width = 48;
                JSESCPOSBuilder.Utils.check4CPTable();
            }
            _addB(value) {
                for (var i = 0; i < value.length; i++)
                    this._buffer = this._buffer.concat(value[i]);
            }
            setCharacterCodeTable(code_table) {
                if (!JSESCPOSBuilder.Utils.isValidUInt8(code_table))
                    throw "Invalid code table";
                this._addB([
                    JSESCPOSBuilder.Constants.ESC,
                    JSESCPOSBuilder.Constants.TAB,
                    [code_table],
                ]);
                return this;
            }
            setPrintWidth(newWidth) {
                this.width = newWidth;
                this._addB([
                    JSESCPOSBuilder.Constants.GS,
                    [87],
                    JSESCPOSBuilder.Utils.int16ToArray(newWidth),
                ]);
                return this;
            }
            marginBottom(size) {
                if (!JSESCPOSBuilder.Utils.isValidUInt8(size))
                    throw "Invalid size";
                this._addB([JSESCPOSBuilder.Margins.BOTTOM, [size]]);
                return this;
            }
            marginLeft(size) {
                if (!JSESCPOSBuilder.Utils.isValidUInt8(size))
                    throw "Invalid size";
                this._addB([JSESCPOSBuilder.Margins.LEFT, [size]]);
                return this;
            }
            marginRight(size) {
                if (!JSESCPOSBuilder.Utils.isValidUInt8(size))
                    throw "Invalid size";
                this._addB([JSESCPOSBuilder.Margins.RIGHT, [size]]);
                return this;
            }
            newLine() {
                this._addB([JSESCPOSBuilder.Constants.EOL]);
                return this;
            }
            drawLine(new_line = false) {
                if (new_line)
                    this.newLine();
                this._addB([JSESCPOSBuilder.Utils.repeat("-".charCodeAt(0), this.width)]);
                return this;
            }
            drawTable(data) {
                let cell_width = this.width / data.length;
                let text = "";
                for (var i = 0; i < data.length; i++) {
                    text += data[i].toString();
                    let spaces = cell_width - data[i].toString().length;
                    text += new Array(spaces + 1).join(' ');
                }
                this._addB([cptable.utils.encode(this.encoding, text)]);
                return this;
            }
            feed(lines = 1) {
                this._addB(JSESCPOSBuilder.Utils.repeat(JSESCPOSBuilder.Constants.EOL, lines));
                return this;
            }
            control(sequence) {
                let buf = [];
                switch (sequence) {
                    case JSESCPOSBuilder.FeedControlSequence.CarriageReturn:
                        buf = [JSESCPOSBuilder.FeedControlSequences.CR];
                        break;
                    case JSESCPOSBuilder.FeedControlSequence.FormFeed:
                        buf = [JSESCPOSBuilder.FeedControlSequences.FF];
                        break;
                    case JSESCPOSBuilder.FeedControlSequence.HorizontalTab:
                        buf = [JSESCPOSBuilder.FeedControlSequences.HT];
                        break;
                    case JSESCPOSBuilder.FeedControlSequence.PrintFeedPaper:
                        buf = [JSESCPOSBuilder.FeedControlSequences.GLF];
                        break;
                    case JSESCPOSBuilder.FeedControlSequence.PrintLineFeed:
                        buf = [JSESCPOSBuilder.FeedControlSequences.LF];
                        break;
                    case JSESCPOSBuilder.FeedControlSequence.VerticalTab:
                        buf = [JSESCPOSBuilder.FeedControlSequences.VT];
                        break;
                }
                this._addB(buf);
                return this;
            }
            align(alignment) {
                let buf = [].concat(JSESCPOSBuilder.Constants.TXT_ALIGNMENT);
                switch (alignment) {
                    case JSESCPOSBuilder.TextAlignment.Center:
                        buf.push(1);
                        break;
                    case JSESCPOSBuilder.TextAlignment.LeftJustification:
                        buf.push(0);
                        break;
                    case JSESCPOSBuilder.TextAlignment.RightJustification:
                        buf.push(2);
                        break;
                }
                this._addB([buf]);
                return this;
            }
            font(family) {
                let buf = [].concat(JSESCPOSBuilder.Constants.TXT_FONT_FAMILY);
                switch (family) {
                    case JSESCPOSBuilder.FontFamily.A:
                        buf.push(0);
                        break;
                    case JSESCPOSBuilder.FontFamily.B:
                        buf.push(1);
                        break;
                    case JSESCPOSBuilder.FontFamily.C:
                        buf.push(2);
                        break;
                }
                this._addB([buf]);
                return this;
            }
            style(styles) {
                let buf = [];
                if (styles.indexOf(JSESCPOSBuilder.FontStyle.Bold) > -1)
                    buf.push(JSESCPOSBuilder.TextFormat.BOLD_ON);
                else
                    buf.push(JSESCPOSBuilder.TextFormat.BOLD_OFF);
                if (styles.indexOf(JSESCPOSBuilder.FontStyle.Italic) > -1)
                    buf.push(JSESCPOSBuilder.TextFormat.ITALIC_ON);
                else
                    buf.push(JSESCPOSBuilder.TextFormat.ITALIC_OFF);
                if (styles.indexOf(JSESCPOSBuilder.FontStyle.Underline) > -1)
                    buf.push(JSESCPOSBuilder.TextFormat.UNDERL_ON);
                else if (styles.indexOf(JSESCPOSBuilder.FontStyle.Underline2) > -1)
                    buf.push(JSESCPOSBuilder.TextFormat.UNDERL2_ON);
                else
                    buf.push(JSESCPOSBuilder.TextFormat.UNDERL_OFF);
                this._addB(buf);
                return this;
            }
            size(width, height) {
                let buf = [];
                buf = JSESCPOSBuilder.TextFormat.CUSTOM_SIZE(width, height);
                this._addB([buf]);
                return this;
            }
            charSpacing(value) {
                let buf = [];
                if (value || value === 0) {
                    if (!JSESCPOSBuilder.Utils.isValidUInt8(value))
                        throw "Invalid value";
                    buf.push(JSESCPOSBuilder.CharacterSpacing.SET);
                    buf.push([value]);
                }
                else {
                    buf.push(JSESCPOSBuilder.CharacterSpacing.DEFAULT);
                }
                this._addB(buf);
                return this;
            }
            lineSpacing(value) {
                let buf = [];
                if (value || value === 0) {
                    if (!JSESCPOSBuilder.Utils.isValidUInt8(value))
                        throw "Invalid value";
                    buf.push(JSESCPOSBuilder.LineSpacing.SET);
                    buf.push([value]);
                }
                else {
                    buf.push(JSESCPOSBuilder.LineSpacing.DEFAULT);
                }
                this._addB(buf);
                return this;
            }
            hardware(hardware) {
                let buf = [];
                switch (hardware) {
                    case JSESCPOSBuilder.Hardware.Init:
                        buf = JSESCPOSBuilder.HardwareOpt.INIT;
                        break;
                    case JSESCPOSBuilder.Hardware.Reset:
                        buf = JSESCPOSBuilder.HardwareOpt.RESET;
                        break;
                    case JSESCPOSBuilder.Hardware.Select:
                        buf = JSESCPOSBuilder.HardwareOpt.SELECT;
                        break;
                }
                this._addB([buf]);
                return this;
            }
            linearBarcode(code, type, options = new JSESCPOSBuilder.Barcode1DOptions()) {
                let buf = [];
                if (options.width)
                    buf.push(JSESCPOSBuilder.BarcodeFormat.WIDTH(options.width));
                else
                    buf.push(JSESCPOSBuilder.BarcodeFormat.WIDTH_DEFAULT);
                if (options.height)
                    buf.push(JSESCPOSBuilder.BarcodeFormat.HEIGHT(options.height));
                else
                    buf.push(JSESCPOSBuilder.BarcodeFormat.HEIGHT_DEFAULT);
                switch (options.font) {
                    case JSESCPOSBuilder.BarcodeFont.A:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.FONT_A);
                        }
                        break;
                    case JSESCPOSBuilder.BarcodeFont.B:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.FONT_B);
                        }
                        break;
                }
                switch (options.position) {
                    case JSESCPOSBuilder.BarcodeTextPosition.Above:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.TXT_ABV);
                        }
                        break;
                    case JSESCPOSBuilder.BarcodeTextPosition.AboveAndBelow:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.TXT_BTH);
                        }
                        break;
                    case JSESCPOSBuilder.BarcodeTextPosition.Below:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.TXT_BLW);
                        }
                        break;
                    case JSESCPOSBuilder.BarcodeTextPosition.Off:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.TXT_OFF);
                        }
                        break;
                }
                switch (type) {
                    case JSESCPOSBuilder.Barcode1DType.CODE39:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.CODE39);
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.ITF:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.ITF);
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.UPC_A:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.UPC_A);
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.UPC_E:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.UPC_E);
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.CODABAR:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.CODABAR);
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.CODE128:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.CODE128);
                            buf.push(JSESCPOSBuilder.Utils.codeLengthUInt16(code));
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.CODE93:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.CODE93);
                            buf.push(JSESCPOSBuilder.Utils.codeLengthUInt16(code));
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.EAN13:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.EAN13);
                        }
                        break;
                    case JSESCPOSBuilder.Barcode1DType.EAN8:
                        {
                            buf.push(JSESCPOSBuilder.BarcodeFormat.EAN8);
                        }
                        break;
                }
                buf.push(cptable.utils.encode(this.encoding, code));
                if (options.include_parity && type in [JSESCPOSBuilder.Barcode1DType.EAN13, JSESCPOSBuilder.Barcode1DType.EAN8])
                    buf.push([JSESCPOSBuilder.Utils.getParityBit(code)]);
                buf.push([0]);
                this._addB(buf);
                return this;
            }
            _wrapperSend2DCodeData(func, code_type, data, modifier) {
                let buf = [];
                let header = JSESCPOSBuilder.Utils.int16ToArray((data != undefined ? data.length : 0) + (modifier != undefined ? 1 : 0) + 2);
                buf = [JSESCPOSBuilder.Constants.GS, [40, 107], header, [code_type, func]];
                if (modifier != undefined)
                    buf.push([modifier]);
                if (typeof (data) == 'string')
                    buf.push(cptable.utils.encode(this.encoding, data));
                else
                    buf.push(data);
                this._addB(buf);
            }
            qrCode(code, options = new JSESCPOSBuilder.BarcodeQROptions()) {
                let ct = 49;
                this._wrapperSend2DCodeData(65, ct, [50, 0]);
                this._wrapperSend2DCodeData(67, ct, [options.size]);
                this._wrapperSend2DCodeData(69, ct, [48 + options.level]);
                this._wrapperSend2DCodeData(80, ct, code, 48);
                this._wrapperSend2DCodeData(81, ct, '', 48);
                return this;
            }
            pdf417(code, options = new JSESCPOSBuilder.BarcodePDF417Options()) {
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
            cashDraw(pin = 2) {
                switch (pin) {
                    case 2:
                        {
                            this._addB([JSESCPOSBuilder.CashDrawer.KICK_2]);
                        }
                        break;
                    case 5:
                        {
                            this._addB([JSESCPOSBuilder.CashDrawer.KICK_2]);
                        }
                        break;
                    default:
                        {
                            this._addB([JSESCPOSBuilder.CashDrawer.KICK_2]);
                        }
                        break;
                }
                return this;
            }
            beep(times, length) {
                this._addB([JSESCPOSBuilder.Constants.BEEP, [times], [length]]);
                return this;
            }
            cut(feed = 3, partial_cut = false) {
                let buf = [];
                this.feed(feed);
                if (partial_cut)
                    buf.push(JSESCPOSBuilder.Paper.PART_CUT);
                else
                    buf.push(JSESCPOSBuilder.Paper.FULL_CUT);
                this._addB(buf);
                return this;
            }
            setColorMode(color) {
                let buf = [];
                if (color)
                    buf = [JSESCPOSBuilder.Color.RED];
                else
                    buf = [JSESCPOSBuilder.Color.BLACK];
                this._addB(buf);
                return this;
            }
            reverseColors(reverse) {
                let buf = [];
                if (reverse)
                    buf = JSESCPOSBuilder.Color.REVERSE;
                else
                    buf = JSESCPOSBuilder.Color.UNREVERSE;
                this._addB([buf]);
                return this;
            }
            raw(data) {
                this._addB([data]);
                return this;
            }
            text(content, override_encoding) {
                if (!override_encoding)
                    override_encoding = this.encoding;
                this._addB([cptable.utils.encode(override_encoding, content), [JSESCPOSBuilder.Constants.EOL]]);
                return this;
            }
            image(image, density = JSESCPOSBuilder.BitmapDensity.D24) {
                let n = 3;
                if ([JSESCPOSBuilder.BitmapDensity.D8, JSESCPOSBuilder.BitmapDensity.S8].indexOf(density) > -1)
                    n = 1;
                let bitmap = image.toBitmap(n * 8);
                let header = [];
                switch (density) {
                    case JSESCPOSBuilder.BitmapDensity.S8:
                        {
                            header = JSESCPOSBuilder.BitmapFormat.S8;
                        }
                        break;
                    case JSESCPOSBuilder.BitmapDensity.D8:
                        {
                            header = JSESCPOSBuilder.BitmapFormat.D8;
                        }
                        break;
                    case JSESCPOSBuilder.BitmapDensity.S24:
                        {
                            header = JSESCPOSBuilder.BitmapFormat.S24;
                        }
                        break;
                    case JSESCPOSBuilder.BitmapDensity.D24:
                        {
                            header = JSESCPOSBuilder.BitmapFormat.D24;
                        }
                        break;
                }
                this.lineSpacing(0);
                let buf = [];
                for (var i = 0; i < bitmap.data.length; i++) {
                    let line = bitmap.data[i];
                    buf.push(header);
                    buf.push(JSESCPOSBuilder.Utils.int16ToArray(line.length / n));
                    buf.push(line);
                    buf.push(JSESCPOSBuilder.Constants.EOL);
                }
                this._addB(buf);
                return this.lineSpacing();
            }
            generateUInt8Array() {
                return new Uint8Array(this._buffer);
            }
            generateArray() {
                return this._buffer;
            }
        }
        JSESCPOSBuilder.Document = Document;
    })(JSESCPOSBuilder = Neodynamic.JSESCPOSBuilder || (Neodynamic.JSESCPOSBuilder = {}));
})(Neodynamic || (Neodynamic = {}));
var Neodynamic;
(function (Neodynamic) {
    var JSESCPOSBuilder;
    (function (JSESCPOSBuilder) {
        let PrinterModel;
        (function (PrinterModel) {
            PrinterModel[PrinterModel["Generic"] = 0] = "Generic";
        })(PrinterModel = JSESCPOSBuilder.PrinterModel || (JSESCPOSBuilder.PrinterModel = {}));
        let FeedControlSequence;
        (function (FeedControlSequence) {
            FeedControlSequence[FeedControlSequence["PrintLineFeed"] = 0] = "PrintLineFeed";
            FeedControlSequence[FeedControlSequence["PrintFeedPaper"] = 1] = "PrintFeedPaper";
            FeedControlSequence[FeedControlSequence["FormFeed"] = 2] = "FormFeed";
            FeedControlSequence[FeedControlSequence["CarriageReturn"] = 3] = "CarriageReturn";
            FeedControlSequence[FeedControlSequence["HorizontalTab"] = 4] = "HorizontalTab";
            FeedControlSequence[FeedControlSequence["VerticalTab"] = 5] = "VerticalTab";
        })(FeedControlSequence = JSESCPOSBuilder.FeedControlSequence || (JSESCPOSBuilder.FeedControlSequence = {}));
        let TextAlignment;
        (function (TextAlignment) {
            TextAlignment[TextAlignment["LeftJustification"] = 0] = "LeftJustification";
            TextAlignment[TextAlignment["Center"] = 1] = "Center";
            TextAlignment[TextAlignment["RightJustification"] = 2] = "RightJustification";
        })(TextAlignment = JSESCPOSBuilder.TextAlignment || (JSESCPOSBuilder.TextAlignment = {}));
        let FontFamily;
        (function (FontFamily) {
            FontFamily[FontFamily["A"] = 0] = "A";
            FontFamily[FontFamily["B"] = 1] = "B";
            FontFamily[FontFamily["C"] = 2] = "C";
        })(FontFamily = JSESCPOSBuilder.FontFamily || (JSESCPOSBuilder.FontFamily = {}));
        let FontStyle;
        (function (FontStyle) {
            FontStyle[FontStyle["Bold"] = 0] = "Bold";
            FontStyle[FontStyle["Italic"] = 1] = "Italic";
            FontStyle[FontStyle["Underline"] = 2] = "Underline";
            FontStyle[FontStyle["Underline2"] = 3] = "Underline2";
        })(FontStyle = JSESCPOSBuilder.FontStyle || (JSESCPOSBuilder.FontStyle = {}));
        let Hardware;
        (function (Hardware) {
            Hardware[Hardware["Init"] = 0] = "Init";
            Hardware[Hardware["Select"] = 1] = "Select";
            Hardware[Hardware["Reset"] = 2] = "Reset";
        })(Hardware = JSESCPOSBuilder.Hardware || (JSESCPOSBuilder.Hardware = {}));
        let Barcode1DType;
        (function (Barcode1DType) {
            Barcode1DType[Barcode1DType["UPC_A"] = 0] = "UPC_A";
            Barcode1DType[Barcode1DType["UPC_E"] = 1] = "UPC_E";
            Barcode1DType[Barcode1DType["EAN13"] = 2] = "EAN13";
            Barcode1DType[Barcode1DType["EAN8"] = 3] = "EAN8";
            Barcode1DType[Barcode1DType["CODE39"] = 4] = "CODE39";
            Barcode1DType[Barcode1DType["ITF"] = 5] = "ITF";
            Barcode1DType[Barcode1DType["CODE93"] = 6] = "CODE93";
            Barcode1DType[Barcode1DType["CODE128"] = 7] = "CODE128";
            Barcode1DType[Barcode1DType["CODABAR"] = 8] = "CODABAR";
        })(Barcode1DType = JSESCPOSBuilder.Barcode1DType || (JSESCPOSBuilder.Barcode1DType = {}));
        let BarcodeTextPosition;
        (function (BarcodeTextPosition) {
            BarcodeTextPosition[BarcodeTextPosition["Off"] = 0] = "Off";
            BarcodeTextPosition[BarcodeTextPosition["Above"] = 1] = "Above";
            BarcodeTextPosition[BarcodeTextPosition["Below"] = 2] = "Below";
            BarcodeTextPosition[BarcodeTextPosition["AboveAndBelow"] = 3] = "AboveAndBelow";
        })(BarcodeTextPosition = JSESCPOSBuilder.BarcodeTextPosition || (JSESCPOSBuilder.BarcodeTextPosition = {}));
        let BarcodeFont;
        (function (BarcodeFont) {
            BarcodeFont[BarcodeFont["A"] = 0] = "A";
            BarcodeFont[BarcodeFont["B"] = 1] = "B";
        })(BarcodeFont = JSESCPOSBuilder.BarcodeFont || (JSESCPOSBuilder.BarcodeFont = {}));
        let QRLevel;
        (function (QRLevel) {
            QRLevel[QRLevel["L"] = 0] = "L";
            QRLevel[QRLevel["M"] = 1] = "M";
            QRLevel[QRLevel["Q"] = 2] = "Q";
            QRLevel[QRLevel["H"] = 3] = "H";
        })(QRLevel = JSESCPOSBuilder.QRLevel || (JSESCPOSBuilder.QRLevel = {}));
        let BitmapDensity;
        (function (BitmapDensity) {
            BitmapDensity[BitmapDensity["S8"] = 0] = "S8";
            BitmapDensity[BitmapDensity["D8"] = 1] = "D8";
            BitmapDensity[BitmapDensity["S24"] = 2] = "S24";
            BitmapDensity[BitmapDensity["D24"] = 3] = "D24";
        })(BitmapDensity = JSESCPOSBuilder.BitmapDensity || (JSESCPOSBuilder.BitmapDensity = {}));
    })(JSESCPOSBuilder = Neodynamic.JSESCPOSBuilder || (Neodynamic.JSESCPOSBuilder = {}));
})(Neodynamic || (Neodynamic = {}));
var Neodynamic;
(function (Neodynamic) {
    var JSESCPOSBuilder;
    (function (JSESCPOSBuilder) {
        class GetPixels {
            static getPixels(b64_image) {
                return new Promise((ok, err) => {
                    let img = new Image();
                    img.crossOrigin = "Anonymous";
                    img.onload = () => {
                        let canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        let context = canvas.getContext('2d');
                        context.drawImage(img, 0, 0);
                        let pixels = context.getImageData(0, 0, img.width, img.height);
                        ok({ data: new Uint8Array(pixels.data), shape: [img.width, img.height, 4], stride: [4, 4 * img.width, 1] });
                    };
                    img.onerror = (e) => { err(e); };
                    img.src = b64_image;
                });
            }
        }
        JSESCPOSBuilder.GetPixels = GetPixels;
    })(JSESCPOSBuilder = Neodynamic.JSESCPOSBuilder || (Neodynamic.JSESCPOSBuilder = {}));
})(Neodynamic || (Neodynamic = {}));
var Neodynamic;
(function (Neodynamic) {
    var JSESCPOSBuilder;
    (function (JSESCPOSBuilder) {
        class ESCPOSImageSize {
            constructor(width, height, colors) {
                this.width = 0;
                this.height = 0;
                this.colors = 0;
                if (width)
                    this.width = width;
                if (height)
                    this.height = height;
                if (colors)
                    this.colors = colors;
            }
        }
        JSESCPOSBuilder.ESCPOSImageSize = ESCPOSImageSize;
        class ESCPOSImage {
            constructor(pixels) {
                this.data = [];
                this.pixels = pixels;
                if (!this.size)
                    throw "Invalid size";
                let temp_arr = [];
                for (var i = 0; i < this.pixels.data.length; i += this.size.colors) {
                    let color_arr = new Array(this.size.colors).fill(0);
                    let d = this.rgb(color_arr.map((_, b) => this.pixels.data[i + b]));
                    temp_arr.push(d);
                }
                ;
                this.data = temp_arr.map((pixel) => {
                    if (pixel.a == 0)
                        return 0;
                    return pixel.r !== 0xFF || pixel.g !== 0xFF || pixel.b !== 0xFF ? 1 : 0;
                });
            }
            rgb(pixel) {
                return {
                    r: pixel[0],
                    g: pixel[1],
                    b: pixel[2],
                    a: pixel[3]
                };
            }
            static load(b64_image) {
                return new Promise((ok, err) => {
                    JSESCPOSBuilder.GetPixels.getPixels(b64_image)
                        .then((value) => {
                        ok(new ESCPOSImage(value));
                    })
                        .catch((reason) => {
                        err(reason);
                    });
                });
            }
            get size() {
                if (!this.pixels)
                    return undefined;
                return new ESCPOSImageSize(this.pixels.shape[0], this.pixels.shape[1], this.pixels.shape[2]);
            }
            toBitmap(density) {
                if (!this.size)
                    return undefined;
                density = density || 24;
                var ld = [];
                var result = [];
                var x, y, b, l, i;
                var c = density / 8;
                var n = Math.ceil(this.size.height / density);
                for (y = 0; y < n; y++) {
                    ld = [];
                    result[y] = [];
                    for (x = 0; x < this.size.width; x++) {
                        for (b = 0; b < density; b++) {
                            i = x * c + (b >> 3);
                            if (ld[i] === undefined) {
                                ld[i] = 0;
                            }
                            l = y * density + b;
                            if (l < this.size.height) {
                                if (this.data[l * this.size.width + x]) {
                                    ld[i] += (0x80 >> (b & 0x7));
                                }
                            }
                        }
                    }
                    result[y] = ld;
                }
                return {
                    data: result,
                    density: density
                };
            }
            toRaster() {
                if (!this.size)
                    return undefined;
                var result = [];
                var width = this.size.width;
                var height = this.size.height;
                var data = this.data;
                var n = Math.ceil(width / 8);
                var x, y, b, c, i;
                for (y = 0; y < height; y++) {
                    for (x = 0; x < n; x++) {
                        for (b = 0; b < 8; b++) {
                            i = x * 8 + b;
                            if (result[y * n + x] === undefined) {
                                result[y * n + x] = 0;
                            }
                            c = x * 8 + b;
                            if (c < width) {
                                if (data[y * width + i]) {
                                    result[y * n + x] += (0x80 >> (b & 0x7));
                                }
                            }
                        }
                    }
                }
                return {
                    data: result,
                    width: n,
                    height: height
                };
            }
        }
        JSESCPOSBuilder.ESCPOSImage = ESCPOSImage;
    })(JSESCPOSBuilder = Neodynamic.JSESCPOSBuilder || (Neodynamic.JSESCPOSBuilder = {}));
})(Neodynamic || (Neodynamic = {}));
var Neodynamic;
(function (Neodynamic) {
    var JSESCPOSBuilder;
    (function (JSESCPOSBuilder) {
        class Utils {
            static isValidUInt8(value) {
                return value == new Uint8Array([value])[0];
            }
            static repeat(value, count) {
                let buf = [];
                for (var i = 0; i < count; i++)
                    buf.push(value);
                return buf;
            }
            static getParityBit(code) {
                let parity = 0;
                let code_r = code.split('').reverse().join('');
                for (var i = 0; i < code_r.length; i++) {
                    parity += parseInt(code_r.charAt(i), 10) * Math.pow(3, ((i + 1) % 2));
                }
                return ((10 - (parity % 10)) % 10).toString().charCodeAt(0);
            }
            static check4CPTable() {
                if (!('cptable' in window)) {
                    throw "cptable.js and cputils.js files from " +
                        "https://github.com/SheetJS/js-codepage" +
                        "project are missing";
                }
            }
            static int32ToArray(number) {
                return [number & 0xFF,
                    (number >> 8) & 0xFF,
                    (number >> 16) & 0xFF,
                    (number >> 24) & 0xFF];
            }
            static int16ToArray(number) {
                return [number & 0xFF,
                    (number >> 8) & 0xFF];
            }
            static codeLengthUInt16(code) {
                return this.int16ToArray(code.length);
            }
        }
        JSESCPOSBuilder.Utils = Utils;
    })(JSESCPOSBuilder = Neodynamic.JSESCPOSBuilder || (Neodynamic.JSESCPOSBuilder = {}));
})(Neodynamic || (Neodynamic = {}));
