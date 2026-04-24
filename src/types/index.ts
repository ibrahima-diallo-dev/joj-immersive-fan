export interface Site {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
}

export interface TranslationMap {
  [key: string]: {
    title: string;
    description: string;
  };
}

export interface ChatMessageItem {
  id: string;
  author: string;
  text: string;
}
