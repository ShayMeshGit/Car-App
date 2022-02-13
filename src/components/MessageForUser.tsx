interface IProps {
  message: string;
}

const MessageForUser = (props: IProps) => {
  return <h2>{props.message}</h2>;
};

export default MessageForUser;
