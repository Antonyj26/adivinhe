import styles from "./styles.module.css";

type Props = React.ComponentProps<"input">;

export function Input({ ...rest }: Props) {
  return <input {...rest} type="text" className={styles.input}></input>;
}
