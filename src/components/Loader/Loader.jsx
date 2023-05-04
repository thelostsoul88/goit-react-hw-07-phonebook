import { LineWave } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className="absolute top-0 left-40">
      <LineWave
        color="red"
        firstLineColor="blue"
        middleLineColor="green"
        lastLineColor="grey"
      />
    </div>
  );
};

export default Loader;
