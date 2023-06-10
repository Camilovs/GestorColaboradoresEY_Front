import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { HeaderColaborador } from "./ColaboradorInfo/HeaderColaborador";
import { InfoColaborador } from "./ColaboradorInfo/InfoColaborador";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const ColaboradorItem = ({ user }) => {
  return (
    <Accordion sx={{ p: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <HeaderColaborador user={user} />
      </AccordionSummary>
      <AccordionDetails>
        <InfoColaborador user={user} />
      </AccordionDetails>
    </Accordion>
  );
};
