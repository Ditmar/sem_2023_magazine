import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, SetStateAction, useState } from 'react'
import styles from './styles.module.css'

interface Props {
  password: string;
  setPassword: (value: SetStateAction<string>) => void;
}

export const PasswordField: FC<Props> = ({
  password,
  setPassword,
}): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      {/* Logic */}
      <input
        value={password}
        type={visible ? "text" : "password"}
        className={styles.inputArea}
        onChange={(e) => setPassword(e.target.value)}
      />

      <span className={styles.eyeIcon}>
        {
          <FontAwesomeIcon
            icon={visible ? "eye" : "eye-slash"}
            onClick={() => setVisible(!visible)}
          />
        }
      </span>
    </>
  );
};