import './button.css';
interface Props {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** The onclick event handler */
  onClick?: () => void;
}
declare const Button: import('svelte').Component<Props, object, ''>;
type Button = ReturnType<typeof Button>;
export default Button;
