// Type declarations for AskAva widget
interface AskAvaWidget {
  openModal: () => void;
  closeModal: () => void;
}

interface Window {
  AskAva?: AskAvaWidget;
}
