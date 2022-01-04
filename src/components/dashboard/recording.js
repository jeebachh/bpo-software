import { useReactMediaRecorder } from "react-media-recorder";

const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });

  return (
    <div>
      
      <button  style={{backgroundColor:"green",color:"white"}} onClick={startRecording}>Start Recording</button>
      <button  style={{backgroundColor:"red",color:"white"}} onClick={stopRecording}>Stop Recording</button>
      
    </div>
  );
};
export default RecordView;