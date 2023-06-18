interface DropdownItems {
  text: string;
  func: (where?: string) => void | useNavigate;
}

interface ItemList {
  createdAt: string;
  fileName: string;
  id: string;
  info: string;
  price: string;
  productKind: string;
  productName: string;
  updatedAt: string;
}
