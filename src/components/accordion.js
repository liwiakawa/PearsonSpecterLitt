import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Playfair Display",
    color: "#2d3c70",
  },
  box: {
    backgroundColor: "#F3F6FF",
  },
  desc: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Lato Display",
    color: "#2D3C70",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Finance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            We help you to increase your company’s share capital to permit
            further investments. We guide you through the conversion or merger
            of your company, in particular to facilitate its entrepreneurial
            development. We can arrange the acquisition of a business in Swiss
            law and enable you to manage such transactions and their
            consequences efficiently. We are used to managing relations between
            a company and its shareholders and investors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> Corporate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            As a result of cooperation with corporate groups and large
            enterprises, our lawyers acquired extensive experience in both
            international and corporate law. The Firm systematically registers
            companies and provides corporate law services to international
            clients from all over the world. As part of its daily operations,
            our team of lawyers renders comprehensive legal services to foreign
            companies belonging to international corporate entities (including
            stock exchange listed companies).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="harmoszka"
        >
          <Typography className={classes.heading}> Real estate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Our real estate practice covers all manner of industrial,
            commercial, and residential real estate transactions. PSL lawyers
            regularly advise clients on property development, acquisition,
            disposition, finance, leasing, construction, and syndication. We
            also assist with real estate loan workouts, leases, international
            real estate purchases, negotiations with development partners and
            investors, zoning and land use issues, and real estate taxation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Intellectual property
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            We are aware of the upcoming technological revolution. The Internet
            of Things (IoT) changes our lives at every step. Its impact on
            education, communication, business or medical services will grow
            every day. Thanks to IoT, all devices around us will collect and
            process huge amounts of information. Other sectors of the global
            economy are joining the creation of this technological revolution.
            We are convinced that legal support requires an in-depth
            understanding of the client's needs, his product and the technology
            behind him, combined with many years of experience in intellectual
            property law. PSL combines these requirements in the knowledge of
            our lawyers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sexual Harassment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Examples of harassment can include unwelcome advances or touching;
            sexually offensive comments or jokes; requests for sexual favors;
            display of pornographic material; and other abusive verbal, visual,
            or physical conduct. The harasser can be a supervisor, a co-worker,
            or a non-employee at a worksite such as a client or a customer. The
            law applies to both men and women and the victim and harasser can be
            the same sex or different sexes. In addition, anyone offended by the
            conduct can be a victim of sexual harassment, whether or not they
            were harassed directly. In the case of a hostile work environment
            claim, sexual harassment may occur without any economic injury or
            tangible adverse employment action.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> Technology</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Legal representation is important in any industry — perhaps even
            more so in the technology industry. With its unconventional business
            models and an environment that is constantly evolving, the
            technology industry is an exciting and empowering environment with
            the lion’s share of legal pitfalls. We have years of experience and
            cross-disciplinary expertise in the area of technology law. In this
            ever-changing landscape and the lag in legislation, our attorneys
            work to protect our clients’ intellectual property rights, maintain
            compliance and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> Litigation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Pearson Specter Litt corporate and civil litigation lawyers are
            focused first on dispute prevention, but when litigation is
            necessary, they are experts at guiding clients through conflict and
            adversity. Our team includes strong and savvy negotiators who strive
            to resolve legal issues through arbitration and mediation, whenever
            possible. If that is not possible, however, we are relentless
            litigators who stop at nothing to provide our clients with the best
            defense possible. Our corporate and civil litigation lawyers are
            experienced at representing clients in all types of legal matters in
            courts around the world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> Mergers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Corporate mergers and acquisitions are typically some of the most
            important transactions in the life of a business. Even the most
            straightforward merger is bound to have elements that are
            challenging. Add the complexity that comes with an international
            deal, and the stakes get even higher. We are experts at both local
            and international mergers and acquisitions. They are ready to help
            you confidently navigate the process, from negotiating a memorandum
            of understanding through handling any post-closing issues that may
            arise.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
