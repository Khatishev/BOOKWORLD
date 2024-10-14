import { defineStore } from "pinia";

interface Book {
  image: string;
  title: string;
  author: string;
  category: string;
  price: number;
  hover: boolean;
  isNew?: boolean;
  isTop?: boolean;
  isSale?: boolean;
  discountedPrice?: number;
}

interface CartItem {
  book: Book;
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as CartItem[],
  }),
  actions: {
    addToCart(book: Book) {
      const cartItem = this.cartItems.find(
        (item) => item.book.title === book.title
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cartItems.push({ book, quantity: 1 });
      }
      this.saveCartItems();
    },
    increaseQuantity(cartItem: CartItem) {
      cartItem.quantity += 1;
      this.saveCartItems();
    },
    decreaseQuantity(cartItem: CartItem) {
      if (cartItem.quantity > 0) {
        cartItem.quantity -= 1;
        this.saveCartItems();
      }
    },
    buyBook(cartItem: CartItem) {
      alert(`Куплена книга: ${cartItem.book.title}`);
      this.removeBook(cartItem);
    },
    removeBook(cartItem: CartItem) {
      this.cartItems = this.cartItems.filter((item) => item !== cartItem);
      this.saveCartItems();
    },
    buyAllBooks() {
      this.cartItems.forEach((cartItem) => {
        if (cartItem.quantity > 0) {
          alert(`Куплена книга: ${cartItem.book.title}`);
          this.removeBook(cartItem);
        }
      });
    },
    deleteAllBooks() {
      this.cartItems = [];
      this.saveCartItems();
    },
    saveCartItems() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
});
