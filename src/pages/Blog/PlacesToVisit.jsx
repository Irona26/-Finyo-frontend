import React from 'react';
import {
  Typography, Box,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

import { useTheme } from '@mui/material/styles';
import useScrollTo from '../../useScrollTo';

import img from '../../img/blog.png';

export default function PlacesToVisit() {
  const theme = useTheme();
  useScrollTo(0, 0);
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
          objectfit="inherit"
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
          Places to visit in summer in Belarus
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
          Maybe it’s because of school schedules, or due to family traditions,
          but summer is believed to be the best time for a vacation.
          It obviously is in Belarus, where the climate is moderate,
          and the only three months when you can go out wearing the same T-shirt
          you just slept in – are June, July and August. So let’s go
          hunting for the best spots to make the most out of this vacation.
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 2,
            color: theme.palette.primary.main,
          }}
        >
          Ecotourism in Belarus
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Belarus has more than 10,000 lakes, so one surely needs a guide
          to figure out their choice. We bet on Braslav Lakes
          (yes, there’s not one, rather a group of lakes).

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
          Braslav National Park
        </Typography>
        <Typography
          sx={{
            width: 'auto',
            p: 10,
            pt: 0,
            pb: 2,
            color: 'rgba(0, 0, 0, 0.65)',
          }}
        >
          There are lots of recreation centers on the territory of
          Braslav National Park. You can also rent a cabin or bring
          one with you. Fishing is allowed, and the lakes are
          inhabited with 30000 species of fish. The water is pure,
          but best give it a couple of sunny weeks before going
          there to swim – the temperature of deep still water can
          be surprisingly unwelcoming even in June.
          As pretty much any lake, these lakes are surrounded by woods,
          touristic services include both water and forest sightseeing routes.
          Getting there is easy – again, like almost everywhere across
          the country – the roads are fine, and there’s a vast net of
          public transport – it takes 3.5 hours by bus to get from Minsk
          to Braslav. Braslav itself is a small town with an old center
          and a couple of churches you might want to visit if you like
          to explore the local culture or buy souvenirs.
          Even closer to Minsk is Vileika Lake. It’s famous for clean
          water and pine-wood banks, but most of all – for the “ocean drive”
          along the number of its bridges. Rent a car, turn the rock-wave on,
          and sing along breathing the fresh air of pure nature as it is.
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
          Lake Naroch
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Another blue diamond of the country is a northern Lake Naroch.
          It is the biggest and to the most popular among tourists.
          On the coast of Naroch there is a resort settlement Naroch,
          where there are spa resorts, health camps, holiday centers.
          Each health resort, and there are 13 of them, has its own beach,
          open to all tourist. All beaches have boat, water ski and bicycle
          rental offices. Make sure to try and take a water ride called
          paddleboat – fun and workout, bless the summer.
          Speaking about health resorts, we cannot but mention how popular
          they are among foreign tourist in Belarus – the country covered
          with pinewood forests that are great for your respiratory organs.
          Most of resorts are located on the rivers or lakes, some even
          have their own pumprooms or speleology medical caves.
          Within just two weeks to one month, your cardiovascular
          system and organs of digestion can be improved significantly.
          <br />
          <br />
          Travelling by car you can enter the territory of the Naroch
          National Park and stay in one of 16 equipped tourist sites.
          Pay a small fee, and feel free to use shelters, tables,
          fireplaces and toilets. Car parking is available nearby.
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
          Blue Lakes
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          It’s also a 3-4 hours’ ride from Minsk, buses available.
          There are lots of lakes and rivers in the area, such as
          the Blue Lakes – a good touristic spot, where everything
          is ready for you to enjoy nature. It really is a God’s country,
          the waterfront is long and narrow, surrounded by woods and bushes,
          it’s so isolated you could even start a cult and make human
          sacrifices without neighbors noticing. Please don’t.

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
          Berezina River
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Another water attraction of the country is Berezina River. Besides obvious,
          one could join a group and go kayaking, exploring the river for hours and even days.
          Totally up to you and your level of comfort. It looks like quiet a journey
          from birds’ view, isn’t it? It’s only one-hour ride from Minsk to Borisov,
          and touristic sites are free of charge.

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
          Svityaz Lake
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          2 hours south-west from Minsk there’s one most mysterious lake of the country –
          Svityaz. Every year on the night of July 6-7 local youth holds a
          Midsummer celebration. Here, in a pagan temple, Belarus first began
          to celebrate this holiday. At the foot of the mountain, there is
          a small lake, on the smooth surface of which girls would put their
          wildflower wreaths, sometimes with burning candles, to light their
          way to the intended husband. Traditionally, a bonfire is burned,
          celebrants would jump over it, and bathe naked, and stroll into
          the woods to find a magic flower that fulfills their wishes.
          Once at this time on the lake Svityaz, a tourist can plunge into
          the atmosphere of thrilling legends and pagan dreams.
          If summer vacation routine does not only include getting tan and
          fit from swimming (of fat from laying all day long) – you might
          want to explore quiet a unique Belarussian attraction – museums of ethnography.
          Don’t yearn, it’s no gallery of ancient sculptures and armory – it’s
          what they call skansen.
          Small villages preserved in their natural state, with lots of
          interractual attractions for you to watch and take part in.
          For instance, they have those in Ozertso only 10 minutes away
          from Minsk, or Dudutki, half-hour ride away.

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
          National Park Belovezhskaya Pushcha
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          If more nature and more adventure is what you need – visit National Park
          Belovezhskaya Pushcha on the Polish border of Belarus, 380 kilometers
          southwest from Minsk.
          It is a major biosphere reserve under UNESCO protection. Belovezhskaya Pushcha
          is famous for its centuries-old trees and the diversity of fauna – more than
          220 species of birds and almost 60 species of mammals, among which you can
          see the mighty bison, bears, deer and many other animals. They live in
          natural surrounding, and one can feed them and touch them, can ride a bike
          along the roads of this authentic forest, can rent a hotel room or a cabin
          and spend unforgettable weekend, taking moments to admire oaks, whose age
          exceeds five centuries, as well as centuries-old pines, spruces, ash trees
          and lindens, communicating with nature and exploring what is yet to be discovered.
          The list could go on endlessly, and so could our warmest welcome for you
          to visit Belarus in summer! In the times when one has been endued with
          power to pick the dates of their own summer according to their work/family
          schedule (and plane ticket prices), it could be refreshing though, to stay
          in a risk zone, where 1-week vacation could turn out to be sweater weather,
          and see places really worth the risk.
        </Typography>

      </Box>
    </>
  );
}
