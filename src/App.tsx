import * as React from "react";
import * as yup from "yup";
import "./App.scss";
import AppStyle from "./AppStyle";

export interface AppState {
  email: string;
  loading: boolean;
  success: boolean;
  errors: { message: string }[];
}

class App extends React.Component<{}, AppState> {
  state = {
    email: "",
    loading: false,
    success: false,
    errors: []
  };

  removeError = (messageToRemoveBy: string) =>
    this.setState(({ errors }) => ({
      errors: errors.filter(({ message }) => message !== messageToRemoveBy)
    }));

  render = () => {
    const {
      state: { email, loading, success, errors }
    } = this;

    const emailValid = yup
      .string()
      .email()
      .isValidSync(email);

    return (
      <div style={AppStyle}>
        <h2
          style={{
            visibility: success ? "visible" : "hidden",
            opacity: success ? 1 : 0,
            transition: "opacity 1s ease-in-out"
          }}
        >
          ✅ Submitted
        </h2>
        {errors.map(({ message }) => (
          <h2 onClick={() => this.removeError(message)}>❌ {message}</h2>
        ))}
        <form
          onSubmit={e => {
            e.preventDefault();

            this.setState({ loading: true });

            setTimeout(
              () => this.setState({ loading: false, success: true, email: "" }),
              2000
            );

            setTimeout(() => this.setState({ success: false }), 5000);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={({ target: { value } }: any) =>
              this.setState({ email: value })
            }
          />
          <input
            type="submit"
            disabled={!email || !emailValid || loading}
            style={{ cursor: loading ? "wait" : "default" }}
          />
        </form>
      </div>
    );
  };
}

export default App;
