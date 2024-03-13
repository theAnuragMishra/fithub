import Button from "@mui/material/Button";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseArrowOutlinedIcon from "@mui/icons-material/PauseOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
export default function Tracker() {
  return (
    <div className="w-2/3 flex justify-center">
      <Button variant="outlined" className="h-10 w-20">
        Start
      </Button>
      <Button disabled variant="outlined" className="h-10 w-20 text-xl">
        00:00
      </Button>
      <Button variant="outlined" className="h-10 w-20">
        <PauseArrowOutlinedIcon />
      </Button>
      <Button variant="outlined" className="h-10 w-20">
        <ArrowForwardIosOutlinedIcon />
      </Button>
    </div>
  );
}
