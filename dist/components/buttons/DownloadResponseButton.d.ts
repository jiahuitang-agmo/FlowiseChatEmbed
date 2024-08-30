import { JSX } from 'solid-js/jsx-runtime';
type DownloadFileButtonProps = {
    buttonColor?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    disableIcon?: boolean;
    buttonText?: string;
    lastAgent?: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const DownloadFileButton: (props: DownloadFileButtonProps) => JSX.Element;
export declare const Spinner: (props: JSX.SvgSVGAttributes<SVGSVGElement>) => JSX.Element;
export {};
//# sourceMappingURL=DownloadResponseButton.d.ts.map