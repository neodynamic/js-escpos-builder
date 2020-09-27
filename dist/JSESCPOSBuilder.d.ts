declare namespace Neodynamic.JSESCPOSBuilder {
    class Constants {
        static readonly LF: number[];
        static readonly FS: number[];
        static readonly FF: number[];
        static readonly GS: number[];
        static readonly DLE: number[];
        static readonly EOT: number[];
        static readonly NUL: number[];
        static readonly ESC: number[];
        static readonly TAB: number[];
        static readonly EOL: number[];
        static readonly BEEP: number[];
        static readonly TXT_ALIGNMENT: number[];
        static readonly TXT_FONT_FAMILY: number[];
    }
    class FeedControlSequences {
        static readonly LF: number[];
        static readonly GLF: number[];
        static readonly FF: number[];
        static readonly CR: number[];
        static readonly HT: number[];
        static readonly VT: number[];
    }
    class CharacterSpacing {
        static readonly DEFAULT: number[];
        static readonly SET: number[];
    }
    class LineSpacing {
        static readonly DEFAULT: number[];
        static readonly SET: number[];
    }
    class HardwareOpt {
        static readonly INIT: number[];
        static readonly SELECT: number[];
        static readonly RESET: number[];
    }
    class CashDrawer {
        static readonly KICK_2: number[];
        static readonly KICK_5: number[];
    }
    class Margins {
        static readonly BOTTOM: number[];
        static readonly LEFT: number[];
        static readonly RIGHT: number[];
    }
    class Paper {
        static readonly FULL_CUT: number[];
        static readonly PART_CUT: number[];
        static readonly CUT_A: number[];
        static readonly CUT_B: number[];
    }
    class TextFormat {
        static readonly NORMAL: number[];
        static readonly TWO_HEIGHT: number[];
        static readonly TWO_WIDTH: number[];
        static readonly FOUR_SQUARE: number[];
        static CUSTOM_SIZE(width: number, height: number): number[];
        static HEIGHT(size: number): number[];
        static WIDTH(size: number): number[];
        static readonly UNDERL_OFF: number[];
        static readonly UNDERL_ON: number[];
        static readonly UNDERL2_ON: number[];
        static readonly BOLD_OFF: number[];
        static readonly BOLD_ON: number[];
        static readonly ITALIC_OFF: number[];
        static readonly ITALIC_ON: number[];
    }
    class BarcodeFormat {
        static readonly TXT_OFF: number[];
        static readonly TXT_ABV: number[];
        static readonly TXT_BLW: number[];
        static readonly TXT_BTH: number[];
        static readonly FONT_A: number[];
        static readonly FONT_B: number[];
        static HEIGHT(height: number): number[];
        static WIDTH(size: number): number[];
        static readonly HEIGHT_DEFAULT: number[];
        static readonly WIDTH_DEFAULT: number[];
        static readonly UPC_A: number[];
        static readonly UPC_E: number[];
        static readonly EAN13: number[];
        static readonly EAN8: number[];
        static readonly CODE39: number[];
        static readonly ITF: number[];
        static readonly CODABAR: number[];
        static readonly CODE93: number[];
        static readonly CODE128: number[];
    }
    class Code2DFormat {
        static readonly TYPE_PDF417: number[];
        static readonly TYPE_DATAMATRIX: number[];
        static readonly TYPE_QR: number[];
        static readonly CODE2D: number[];
        static readonly QR_LEVEL_L: number[];
        static readonly QR_LEVEL_M: number[];
        static readonly QR_LEVEL_Q: number[];
        static readonly QR_LEVEL_H: number[];
    }
    class ImageFormat {
        static readonly NORMAL: number[];
        static readonly DOUBLE_WIDTH: number[];
        static readonly DOUBLE_HEIGHT: number[];
        static readonly QUAD: number[];
    }
    class BitmapFormat {
        static readonly S8: number[];
        static readonly D8: number[];
        static readonly S24: number[];
        static readonly D24: number[];
    }
    class GSV0Format {
        static readonly NORMAL: number[];
        static readonly DW: number[];
        static readonly DH: number[];
        static readonly DWDH: number[];
    }
    class Color {
        static readonly BLACK: number[];
        static readonly RED: number[];
        static readonly REVERSE: number[];
        static readonly UNREVERSE: number[];
    }
    class Screen {
        static readonly BS: number[];
        static readonly HT: number[];
        static readonly LF: number[];
        static readonly US_LF: number[];
        static readonly HOM: number[];
        static readonly CR: number[];
        static readonly US_CR: number[];
        static readonly US_B: number[];
        static readonly US_$: number[];
        static readonly CLR: number[];
        static readonly CAN: number[];
        static readonly US_MD1: number[];
        static readonly US_MD2: number[];
        static readonly US_MD3: number[];
        static readonly US_C: number[];
        static readonly US_E: number[];
        static readonly US_T: number[];
        static readonly US_U: number[];
        static readonly US_X: number[];
        static readonly US_r: number[];
        static readonly US_v: number[];
    }
    class Barcode1DOptions {
        width?: number;
        height?: number;
        position: BarcodeTextPosition;
        include_parity: boolean;
        font: BarcodeFont;
        constructor(width?: number, height?: number, include_parity?: boolean, position?: BarcodeTextPosition, font?: BarcodeFont);
    }
    class BarcodePDF417Options {
        width: number;
        height_multiplier: number;
        data_column_count: number;
        error_ratio: number;
        truncated: boolean;
        constructor(width?: number, height_multiplier?: number, data_column_count?: number, error_ratio?: number, truncated?: boolean);
    }
    class BarcodeQROptions {
        level: QRLevel;
        size: number;
        constructor(level?: QRLevel, size?: number);
    }
}
declare namespace Neodynamic.JSESCPOSBuilder {
    class Document {
        private _buffer;
        model: PrinterModel;
        encoding: number;
        width: number;
        constructor();
        private _addB(value);
        setCharacterCodeTable(code_table: number): Document;
        setPrintWidth(newWidth: number): Document;
        marginBottom(size: number): Document;
        marginLeft(size: number): Document;
        marginRight(size: number): Document;
        newLine(): Document;
        drawLine(new_line?: boolean): Document;
        drawTable(data: string[]): Document;
        feed(lines?: number): Document;
        control(sequence: FeedControlSequence): Document;
        align(alignment: TextAlignment): Document;
        font(family: FontFamily): Document;
        style(styles: Array<FontStyle>): Document;
        size(width: number, height: number): Document;
        charSpacing(value?: number): Document;
        lineSpacing(value?: number): Document;
        hardware(hardware: Hardware): Document;
        linearBarcode(code: string, type: Barcode1DType, options?: Barcode1DOptions): Document;
        private _wrapperSend2DCodeData(func, code_type, data?, modifier?);
        qrCode(code: string, options?: BarcodeQROptions): Document;
        pdf417(code: string, options?: BarcodePDF417Options): Document;
        cashDraw(pin?: number): Document;
        beep(times: number, length: number): Document;
        cut(feed?: number, partial_cut?: boolean): Document;
        setColorMode(color: boolean): Document;
        reverseColors(reverse: boolean): Document;
        raw(data: number[]): Document;
        text(content: string, override_encoding?: number): Document;
        image(image: ESCPOSImage, density?: BitmapDensity): Document;
        generateUInt8Array(): Uint8Array;
        generateArray(): number[];
    }
}
declare namespace Neodynamic.JSESCPOSBuilder {
    enum PrinterModel {
        Generic = 0,
    }
    enum FeedControlSequence {
        PrintLineFeed = 0,
        PrintFeedPaper = 1,
        FormFeed = 2,
        CarriageReturn = 3,
        HorizontalTab = 4,
        VerticalTab = 5,
    }
    enum TextAlignment {
        LeftJustification = 0,
        Center = 1,
        RightJustification = 2,
    }
    enum FontFamily {
        A = 0,
        B = 1,
        C = 2,
    }
    enum FontStyle {
        Bold = 0,
        Italic = 1,
        Underline = 2,
        Underline2 = 3,
    }
    enum Hardware {
        Init = 0,
        Select = 1,
        Reset = 2,
    }
    enum Barcode1DType {
        UPC_A = 0,
        UPC_E = 1,
        EAN13 = 2,
        EAN8 = 3,
        CODE39 = 4,
        ITF = 5,
        CODE93 = 6,
        CODE128 = 7,
        CODABAR = 8,
    }
    enum BarcodeTextPosition {
        Off = 0,
        Above = 1,
        Below = 2,
        AboveAndBelow = 3,
    }
    enum BarcodeFont {
        A = 0,
        B = 1,
    }
    enum QRLevel {
        L = 0,
        M = 1,
        Q = 2,
        H = 3,
    }
    enum BitmapDensity {
        S8 = 0,
        D8 = 1,
        S24 = 2,
        D24 = 3,
    }
}
declare namespace Neodynamic.JSESCPOSBuilder {
    type PixelsStruct = {
        data: Uint8Array;
        shape: number[];
        stride: number[];
    };
    class GetPixels {
        static getPixels(b64_image: string): Promise<PixelsStruct>;
    }
}
declare namespace Neodynamic.JSESCPOSBuilder {
    class ESCPOSImageSize {
        width: number;
        height: number;
        colors: number;
        constructor(width?: number, height?: number, colors?: number);
    }
    class ESCPOSImage {
        pixels?: PixelsStruct;
        data: number[];
        private rgb(pixel);
        constructor(pixels: PixelsStruct);
        static load(b64_image: string): Promise<ESCPOSImage>;
        readonly size: ESCPOSImageSize | undefined;
        toBitmap(density: number): {
            data: number[][];
            density: number;
        };
        toRaster(): {
            data: any[];
            width: number;
            height: number;
        };
    }
}
declare namespace Neodynamic.JSESCPOSBuilder {
    class Utils {
        static isValidUInt8(value: number): boolean;
        static repeat(value: any, count: number): any[];
        static getParityBit(code: string): number;
        static check4CPTable(): void;
        static int32ToArray(number: number): number[];
        static int16ToArray(number: number): number[];
        static codeLengthUInt16(code: string): number[];
    }
}
