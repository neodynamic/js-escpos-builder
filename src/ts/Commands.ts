namespace Neodynamic.JSESCPOSBuilder {
  export class Constants {
    static readonly LF: number[] = [10];
    static readonly FS: number[] = [28];
    static readonly FF: number[] = [12];
    static readonly GS: number[] = [29];
    static readonly DLE: number[] = [16];
    static readonly EOT: number[] = [4];
    static readonly NUL: number[] = [0];
    static readonly ESC: number[] = [27];
    static readonly TAB: number[] = [116];
    static readonly EOL: number[] = [10];
    static readonly BEEP: number[] = [27, 66];
    static readonly TXT_ALIGNMENT: number[] = [27, 97];
    static readonly TXT_FONT_FAMILY: number[] = [27, 77];
  }

  export class FeedControlSequences {
    static readonly LF: number[] = [10];
    static readonly GLF: number[] = [74, 0];
    static readonly FF: number[] = [12];
    static readonly CR: number[] = [13];
    static readonly HT: number[] = [9];
    static readonly VT: number[] = [11];
  }
  export class CharacterSpacing {
    static readonly DEFAULT: number[] = [27, 32, 0];
    static readonly SET: number[] = [27, 32];
  }
  export class LineSpacing {
    static readonly DEFAULT: number[] = [27, 50];
    static readonly SET: number[] = [27, 51];
  }
  export class HardwareOpt {
    static readonly INIT: number[] = [27, 64];
    static readonly SELECT: number[] = [27, 61, 1];
    static readonly RESET: number[] = [27, 63, 10, 0];
  }
  export class CashDrawer {
    static readonly KICK_2: number[] = [27, 112, 0, 25, 250];
    static readonly KICK_5: number[] = [27, 112, 1, 25, 250];
  }
  export class Margins {
    static readonly BOTTOM: number[] = [27, 79];
    static readonly LEFT: number[] = [27, 108];
    static readonly RIGHT: number[] = [27, 81];
  }
  export class Paper {
    static readonly FULL_CUT: number[] = [29, 86, 0];
    static readonly PART_CUT: number[] = [29, 86, 1];
    static readonly CUT_A: number[] = [29, 86, 65];
    static readonly CUT_B: number[] = [29, 86, 66];
  }
  export class TextFormat {
    static readonly NORMAL: number[] = [27, 33, 0];
    static readonly TWO_HEIGHT: number[] = [27, 33, 16];
    static readonly TWO_WIDTH: number[] = [27, 33, 32];
    static readonly FOUR_SQUARE: number[] = [27, 33, 48];
    static CUSTOM_SIZE(width: number, height: number): number[] {
      if (width < 0) throw "Min size 0";
      if (width > 8) throw "Max size 7";
      if (height < 0) throw "Min size 0";
      if (height > 8) throw "Max size 7";
      return [29, 33, (width * 16) + height];
    }
    static HEIGHT(size: number): number[] {
      if (size < 1) throw "Min size 1";
      if (size > 7) throw "Max size 7";
      return [size - 1];
    }
    static WIDTH(size: number): number[] {
      if (size < 1) throw "Min size 1";
      if (size > 7) throw "Max size 7";
      return [(size - 1) * 16];
    }
    static readonly UNDERL_OFF: number[] = [27, 45, 0];
    static readonly UNDERL_ON: number[] = [27, 45, 1];
    static readonly UNDERL2_ON: number[] = [27, 45, 2];
    static readonly BOLD_OFF: number[] = [27, 69, 0];
    static readonly BOLD_ON: number[] = [27, 69, 1];
    static readonly ITALIC_OFF: number[] = [27, 53];
    static readonly ITALIC_ON: number[] = [27, 52];
  }
  export class BarcodeFormat {
    static readonly TXT_OFF: number[] = [29, 72, 0];
    static readonly TXT_ABV: number[] = [29, 72, 1];
    static readonly TXT_BLW: number[] = [29, 72, 2];
    static readonly TXT_BTH: number[] = [29, 72, 3];
    static readonly FONT_A: number[] = [29, 102, 0];
    static readonly FONT_B: number[] = [29, 102, 1];
    static HEIGHT(height: number): number[] {
      return [29, 104, height];
    }
    static WIDTH(size: number): number[] {
      if (size < 1) throw "Min size 1";
      if (size > 5) throw "Max size 5";
      return [29, 119, size + 1];
    }
    static readonly HEIGHT_DEFAULT: number[] = [29, 104, 100];
    static readonly WIDTH_DEFAULT: number[] = [29, 119, 1];
    static readonly UPC_A: number[] = [29, 107, 0];
    static readonly UPC_E: number[] = [29, 107, 1];
    static readonly EAN13: number[] = [29, 107, 2];
    static readonly EAN8: number[] = [29, 107, 3];
    static readonly CODE39: number[] = [29, 107, 4];
    static readonly ITF: number[] = [29, 107, 5];
    static readonly CODABAR: number[] = [29, 107, 6];
    static readonly CODE93: number[] = [29, 107, 72];
    static readonly CODE128: number[] = [29, 107, 73];
  }
  export class Code2DFormat {
    static readonly TYPE_PDF417: number[] = [29, 90, 0];
    static readonly TYPE_DATAMATRIX: number[] = [29, 90, 1];
    static readonly TYPE_QR: number[] = [29, 90, 2];
    static readonly CODE2D: number[] = [27, 90];
    static readonly QR_LEVEL_L: number[] = [76];
    static readonly QR_LEVEL_M: number[] = [77];
    static readonly QR_LEVEL_Q: number[] = [81];
    static readonly QR_LEVEL_H: number[] = [72];
  }
  export class ImageFormat {
    static readonly NORMAL: number[] = [29, 118, 48, 0];
    static readonly DOUBLE_WIDTH: number[] = [29, 118, 48, 1];
    static readonly DOUBLE_HEIGHT: number[] = [29, 118, 48, 2];
    static readonly QUAD: number[] = [29, 118, 48, 3];
  }
  export class BitmapFormat {
    static readonly S8: number[] = [27, 42, 0];
    static readonly D8: number[] = [27, 42, 1];
    static readonly S24: number[] = [27, 42, 32];
    static readonly D24: number[] = [27, 42, 33];
  }
  export class GSV0Format {
    static readonly NORMAL: number[] = [29, 118, 48, 0];
    static readonly DW: number[] = [29, 118, 48, 1];
    static readonly DH: number[] = [29, 118, 48, 2];
    static readonly DWDH: number[] = [29, 118, 48, 3];
  }

  export class Color {
    static readonly BLACK: number[] = [27, 114, 0];
    static readonly RED: number[] = [27, 114, 1];
    static readonly REVERSE: number[] = [29, 66, 49];
    static readonly UNREVERSE: number[] = [29, 66, 48];
  }
  export class Screen {
    static readonly BS: number[] = [8];
    static readonly HT: number[] = [9];
    static readonly LF: number[] = [10];
    static readonly US_LF: number[] = [31, 10];
    static readonly HOM: number[] = [11];
    static readonly CR: number[] = [13];
    static readonly US_CR: number[] = [31, 13];
    static readonly US_B: number[] = [31, 66];
    static readonly US_$: number[] = [31, 36];
    static readonly CLR: number[] = [12];
    static readonly CAN: number[] = [24];
    static readonly US_MD1: number[] = [31, 1];
    static readonly US_MD2: number[] = [31, 2];
    static readonly US_MD3: number[] = [31, 3];
    static readonly US_C: number[] = [31, 67];
    static readonly US_E: number[] = [31, 69];
    static readonly US_T: number[] = [31, 84];
    static readonly US_U: number[] = [31, 85];
    static readonly US_X: number[] = [31, 88];
    static readonly US_r: number[] = [31, 114];
    static readonly US_v: number[] = [31, 118];
  }

  export class Barcode1DOptions {
    public width?: number;
    public height?: number;
    public position: BarcodeTextPosition = BarcodeTextPosition.Below;
    public include_parity: boolean = true;
    public font: BarcodeFont = BarcodeFont.A;
    
    constructor(width? :number, height?: number, include_parity = true,
      position = BarcodeTextPosition.Below, font = BarcodeFont.A) {
        this.width = width;
        this.height = height;
        this.position = position;
        this.include_parity = include_parity;
        this.font = font;
      }
  }

  export class BarcodePDF417Options {
    width: number = 3;
    height_multiplier: number = 3;
    data_column_count: number = 0;
    error_ratio: number = 0.1;
    truncated: boolean = false;

    constructor(width = 3, height_multiplier = 3, data_column_count = 0, 
      error_ratio = 0.1, truncated = false) {
        this.width = width;
        this.height_multiplier = height_multiplier;
        this.data_column_count = data_column_count;
        this.error_ratio = error_ratio;
        this.truncated = truncated;
      }
  }
  
  export class BarcodeQROptions {
    level: QRLevel = QRLevel.L;
    size: number = 6;

    constructor(level = QRLevel.L, size = 6) {
      this.level = level;
      this.size = size;
    }
  }
}