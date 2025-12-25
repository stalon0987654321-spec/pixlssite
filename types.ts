
export type PageName = 
  | 'home' 
  | 'about' 
  | 'contact' 
  | 'work' 
  | 'blog' 
  | 'faq';

export type NavigateFunction = (page: PageName) => void;

export interface NavProps {
  navigate: NavigateFunction;
}
