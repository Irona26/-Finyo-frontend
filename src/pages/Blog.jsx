import React from 'react';
import {
  Typography, Box,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

import { useTheme } from '@mui/material/styles';

import img from '../img/blog.png';

export default function Blog() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          width: 'auto',
          pt: 5,
          p: 2,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt="house"
          objectFit="inherit"
          sx={{
            gridColumn: '1',
            gridRow: '1/5',
            height: 198,
            width: 352,
            borderRadius: '10px',
          }}
        />
        <Typography
          variant="h3"
          sx={{
            gridColumn: '2',
            gridRow: '2',
            width: '700px',
            color: theme.palette.primary.main,
          }}
        >
          Buying a Townhouse:
          {' '}
          <br />
          {' '}
          6 Pros and Cons to Consider
        </Typography>
        <Typography
          sx={{
            gridColumn: '2',
            gridRow: '3',
            color: theme.palette.primary.contrast,
            textAlign: 'right',
          }}
        >
          01/07/2023
        </Typography>
      </Box>
      <Box>
        <Typography sx={{
          width: 'auto',
          p: 10,
          pt: 2,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Is buying a townhouse the right option for you?
          Townhouse living has been growing in popularity for more than a decade,
          but the pandemic has served as a recent impetus for people to think
          even more about living options outside of metro areas.
          Townhouse communities are a great potential option for these homebuyers.
          They serve as a nice middle ground between urban and suburban living:
          a close-knit community that exists in a quieter environment.
          Let’s take a closer look at pros and cons to consider before
          taking the leap to buy a townhouse.
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 5,
            color: theme.palette.primary.main,
          }}
        >
          What is a townhouse?
        </Typography>
        <Typography
          sx={{
            width: 'auto',
            p: 10,
            pt: 0,
            pb: 5,
            color: 'rgba(0, 0, 0, 0.65)',
          }}
        >
          A townhouse is a home that shares at least one wall with a neighboring property.
          While the term is often used interchangeably with “condo” or “rowhome,”
          a townhouse is actually different from both.
          Condos, for example, are typically a single unit within a larger building complex.
          Rowhomes are built in a line and are usually built identically to each other.
          <br />
          <br />
          Townhouses are multi-floor homes that are attached by one or
          two walls to neighboring homes,
          but can still have some architectural differences.
          They may have some outside land (like a small patio)
          but it does not extend very far past where the actual house sits.
          <br />
          <br />
          Townhouses today are often built as part of a community or gated neighborhood,
          making them an attractive option for people who want to live in a close-knit community
          setting without being in a busy metro area.
          Demand for this type of living has increased as a result of the pandemic and
          the subsequent rise in remote work. With less people commuting to the city for work,
          there is more demand for housing in suburban communities.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 0,
            color: theme.palette.primary.main,
          }}
        >
          Pro: Affordability
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Townhouses are generally more affordable than traditional detached homes.
          They sit on smaller lots, have minimal outdoor space, and share walls with the
          neighbors. Upkeep is also cheaper as there is simply less space to maintain.

        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 0,
            color: theme.palette.secondary.main,
          }}
        >
          Con: Less square footage
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          On the other hand, townhouses have less living space both indoors and out.
          Floorplans are often less open than in some traditional detached homes,
          and by design they’re split up into multiple floors.
          For big families or those with pets that require outdoor running space,
          townhouses may feel limiting or downright cramped.

        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 0,
            color: theme.palette.primary.main,
          }}
        >
          Pro: HOA and amenities
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Many townhouses are built in communities that come with a homeowners association
          and shared amenities. These amenities might include outdoor walking trails, pools,
          clubhouses, and more. HOA fees pay for services like snow removal and landscaping.
          Sometimes certain utilities are included, too.
          Many people enjoy these added conveniences and might pursue buying a townhouse
          for those very reasons.

        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 0,
            color: theme.palette.secondary.main,
          }}
        >
          Con: Less freedom
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          While shared amenities and HOA services may be enjoyable and convenient,
          they also mean less freedom in some respects when it comes to your home.
          Many HOAs have rules about the outdoor appearance of homes
          (for example, no exterior painting or fences) and you may sometimes
          have to pay for things you don’t want or use as part of your HOA responsibilities.
          It’s important for homebuyers to research the townhouse communities they’re considering
          and choose one with an HOA that’s a good fit for the

        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 0,
            color: theme.palette.primary.main,
          }}
        >
          Pro: Close proximity to neighbors
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Like we mentioned before, townhouses definitely offer close proximity to your neighbors
          and, as a result, a strong sense of community. If you’re looking to live in a place
          where you’ll know your neighbors and get to talk to them often,
          a townhouse might be right for you. Townhouse communities often organize events as well,
          like barbecues or seasonal celebrations, that help residents get to know
          one another and build connections.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 0,
            color: theme.palette.secondary.main,
          }}
        >
          Con: Less privacy
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          You might enjoy being close with your neighbors, but it’s important to know that
          townhouses also limit privacy. Shared walls mean you can sometimes
          hear voices or loud noises (like tools or music) from your neighbor’s home.
          It also means you’ll see more of them. While that typically just means you’ll encounter
          them more often as you come and go, it may not be the preferred scenario for someone
          who enjoys a quieter, more isolated living space.
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 5,
            color: theme.palette.primary.main,
          }}
        >
          Buying a Townhouse: Deciding if It’s Right for You
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          As you can see, townhouses have plenty of benefits — an active and engaged community,
          affordability, and convenient living amenities to name a few.
          It really comes down to doing your research and deciding if that lifestyle is right
          for you.
          <br />
          <br />
          Because townhouses are often built-in areas transitioning from urban to rural,
          you’ll often enjoy close proximity to nearby metro areas without having to be
          right in the thick of it. Although you may not have as much private outdoor
          space as you would in a detached home, shared outdoor areas like
          walking trails and parks often make up for it.
          <br />
          <br />
          In short: townhouses can provide the perfect balance.
        </Typography>
      </Box>
    </>
  );
}
