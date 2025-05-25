declare module 'react-colorful' {
  export interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
  }
 
  export const HexColorPicker: React.FC<ColorPickerProps>;
} 