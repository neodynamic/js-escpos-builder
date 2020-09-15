namespace Neodynamic.JSESCPOSBuilder {
  export enum PrinterModel {
      Generic,
    }
  export enum FeedControlSequence {
    PrintLineFeed,
    PrintFeedPaper,
    FormFeed,
    CarriageReturn,
    HorizontalTab,
    VerticalTab,
  }
  export enum TextAlignment {
    LeftJustification,
    Center,
    RightJustification,
  }

  export enum FontFamily {
    A,
    B,
    C,
  }

  export enum FontStyle {
    Bold,
    Italic,
    Underline,
    Underline2,
  }

  export enum Hardware {
    Init,
    Select,
    Reset,
  }

  export enum Barcode1DType {
    UPC_A,
    UPC_E,
    EAN13,
    EAN8,
    CODE39,
    ITF,
    CODE93,
    CODE128,
    CODABAR
  }

  export enum BarcodeTextPosition {
    Off,
    Above,
    Below, 
    AboveAndBelow
  }

  export enum BarcodeFont {
    A,
    B
  }

  export enum QRLevel {
    L,
    M,
    Q,
    H
  }

  export enum BitmapDensity {
    S8, 
    D8,
    S24,
    D24
  }
}