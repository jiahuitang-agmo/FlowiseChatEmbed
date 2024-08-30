import { Show } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { DownloadFileIcon } from '../icons';

type DownloadFileButtonProps = {
  buttonColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
  buttonText?: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const DownloadFileButton = (props: DownloadFileButtonProps) => {
  return (
    <button
      type="submit"
      disabled={props.isDisabled || props.isLoading}
      {...props}
      style={{
        background: '#3b81f6',
        border: 'white',
        color: 'white',
        height: '30px',
        width: '100px',
        'margin-left': '8px',
        'margin-top': '10px',
        padding: '3px',
        'border-radius': '3px',
      }}
    >
      <Show when={!props.isLoading} fallback={<Spinner class="text-white" />}>
        <DownloadFileIcon color={props.color}>
          <span style={{ color: 'white', "font-size": '12px' }}>{props.buttonText}</span>
        </DownloadFileIcon>
      </Show>
    </button>
  );
};

export const Spinner = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    {...props}
    class={'animate-spin -ml-1 mr-3 h-5 w-5 ' + props.class}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    data-testid="loading-spinner"
  >
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
