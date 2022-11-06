import PreSchool from "../Levels/PreSchool";
import Younger from "../Levels/Younger";
import Older from "../Levels/Older";
import { useParams } from "react-router-dom";

const LevelPage = () => {
  const params = useParams();
  return (
    <div>
      {(() => {
        if (params.levelName === "preschool") {
          return <PreSchool />;
        } else if (params.levelName === "younger") {
          return <Younger />;
        } else {
          return <Older />;
        }
      })()}
    </div>
  );
};

export default LevelPage;
