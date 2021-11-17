import { Button } from './Button';

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  handleFn: Function;
  selected: number;
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleFn(genre.id)}
            selected={props.selected === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}