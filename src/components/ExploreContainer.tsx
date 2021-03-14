import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
        <strong>{name}1</strong><br/>
        <strong>{name}2</strong><br/>
        <strong>{name}3</strong><br/>
        <strong>{name}4</strong><br/>
        <strong>{name}5</strong><br/>
        <strong>{name}6</strong><br/>
        <strong>{name}7</strong><br/>
        <strong>{name}8</strong><br/>
        <strong>{name}</strong><br/>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
