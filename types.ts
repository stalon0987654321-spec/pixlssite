
export type PageName = 
  | 'home' 
  | 'about' 
  | 'contact' 
  | 'cases' 
  | 'blog' 
  | 'faq';

export type NavigateFunction = (page: PageName) => void;

export interface NavProps {
  navigate: NavigateFunction;
}
