export interface customInputInfo {
  type: "text" | "password" | "email";
  value: string | number;
  onChange: Function;
  placeholder?: string;
}

export interface customButtonInfo {
  children: string;
  size?: "small" | "medium" | "large";
  onClick: Function;
}
