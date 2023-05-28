interface DropdownItems {
  text: string;
  func: (where?: string) => void | useNavigate;
}
