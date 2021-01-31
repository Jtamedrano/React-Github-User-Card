interface Props {
  message: string;
}

export const ErrorMsg = ({ message }: Props) => {
  return <>{message && <p className="error-message">{message}</p>}</>;
};
