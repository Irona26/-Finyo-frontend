import React from 'react';
import {
  Typography, Box,
} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

import { useTheme } from '@mui/material/styles';
import useScrollTo from '../../useScrollTo';

import img from '../../img/blog.png';

export default function Grodno() {
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
          Grodno
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
          Grodno is a regional city in the west of Belarus.
          The city is located on the border with Poland and Lithuania,
          so tourists often try to get here.
          The article will tell you about its history, population and top attractions.
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
          Brief history of Grodno
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
          The history of the city begins in the 10th century in a swampy area.
          Grodno was first mentioned in the Ipatiev Chronicles in 1128,
          where they called it the center of an appanage principality.
          The city has a long history, during which it was part of many states,
          including the Grand Duchy of Lithuania, the Commonwealth and the Russian Empire.
          <br />
          <br />
          The city has a rather advantageous geographical position,
          so the development of handicraft and trade activities began here.
          The products of the Gorodensky blacksmiths, foundry workers,
          potters testified to their high skill. Trade was carried out
          with the ancient Russian cities of the Dnieper region, the Baltic States, Poland.
          The Grand Duke of Lithuania Viten actively promoted the expansion
          of the fortification of the city,
          and in 1299-1326. the prince not only successfully defended the city
          from enemies, but also made retaliatory campaigns to the knightly lands.
          <br />
          <br />
          Further years are associated with the transfer of power to Vitovt Keistutovich
          who made the city the second capital of the Grand Duchy of Lithuania.
          It is surprising that after a strong fire in 1398, the prince rebuilt
          the fortress from durable materials in such a way that part of it
          has survived to this day.
          The next ruler of Grodno was Prince Kazimir Yagailovich.
          Passion for hunting contributed to the construction of a large castle
          on the territory of the Lower Castle. And in 1444 Casimir gave Goroden
          full Magdeburg rights.
          <br />
          <br />
          The signing of the Union of Lublin led to the annexation of the city
          to the Commonwealth. Near Grodno, the residence of the king of the
          Polish-Lithuanian Commonwealth, Stefan Batory, was built, which with its beauty
          could compete with the best European cities of that time.
          In the Grodno region, 20 largest manufactories in Belarus were founded,
          in which 1,500 people from the families of state-owned peasants were involved.
          <br />
          <br />
          Just like all cities of Belarus, Grodno faced the events of the Great Patriotic War.
          As a result, part of the city was destroyed, and the number of residents
          was noticeably reduced, but 1945 ended the war.
          In the post-war years, the active development of the city began,
          so by 1900 there were 18 educational institutions, 2 bookstores, and a library.
          The theater played an important role in the cultural life of the townspeople.
          <br />
          <br />
          Grodno has withstood all the tests that the 20th century brought it,
          and now it is one of the most economically developed regions of Belarus.
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
          Population of Grodno
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          According to the census data as of January 1, 2020, the Grodno region has ceased
          to be the smallest in population in the republic. 1,025,008 people live here.
          During the year, the population decreased significantly, but this did not affect
          the interest of tourists in the city. The presence of a large number of
          attractions and historical values attracts tourists and guests from all over
          the country to the city.

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
          Districts of Grodno
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Grodno is divided into two administrative districts: Oktyabrsky and Leninsky.
          Oktyabrsky district exceeds Leninsky in size, and includes the following microdistricts:
          Folush, Vishnevets and Olshanka.
          Leninsky district is much smaller in area and population,
          and includes such micro-districts as Forts and Devyatovka.

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
          Main sights of Grodno
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          <br />
          <br />
          Old Castle
          <br />
          <br />
          The building of the Old Castle today keeps within its walls truly valuable museum
          exhibits. Previously, the castle was used for holding important events,
          as well as a residence for the Polish King. The ancient walls keep a rich history,
          although they are in a dilapidated state. At the entrance to the castle,
          you can see a beautiful arched bridge.
          <br />
          <br />
          New castle
          <br />
          <br />
          The building was used as a residence for the royal family.
          The New Castle is in no way inferior to the Old Castle in terms of quality
          and architecture. Today the museum of the history of Grodno is located
          inside the castle. For your information, in the era of the Second World War,
          the palace was destroyed almost entirely, later the party regional committee
          was located in it (there is still a star on the spire of the castle).
          <br />
          <br />
          Sovietskaya street
          <br />
          <br />
          Those who want to fully immerse themselves in the life of a provincial town
          should definitely walk along Sovetskaya Street. From all sides,
          tourists are presented not only restaurants and souvenir shops,
          but also the best hotels in Grodno. We recommend taking a walk along the street
          in the evening or at night, because its lighting will add a special atmosphere
          to the lights of forged lanterns.
          <br />
          <br />
          Gilibert park
          <br />
          <br />
          The park ensemble is conveniently located on the territory of the botanical garden.
          Previously, there were seedlings of unique and rare plants, some of which can be
          observed today. The square contains modern art objects, well-groomed shrubs and
          flower beds, benches, wrought iron benches and a small pond.
          <br />
          <br />
          Grodno Zoo
          <br />
          <br />
          You can spend a family weekend on the territory of the Grodno Zoo.
          On a large area of the zoo, you can meet about three hundred species of animals.
          The zoo has zones “Aquarium” and “Terrarium” with all kinds of marine and amphibious
          animals. Some species are allowed to feed directly from the hand.

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
          Grodno architecture
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          On the territory of the Grodno region, tourists are presented with
          a large number of architectural monuments and attractions.
          Unfortunately, most of the architectural objects were destroyed as a
          result of numerous wars and tragic events. But the part that we managed to
          save is actively demonstrated on excursion tours of the region.
          Among the most popular architectural ensembles: the Observation Deck,
          the Palace of the Deputy Governor of Grodno Konstantin Maksimovich,
          the Kasia and Basya Water Towers, Lyamus, etc.

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
          Official symbols of Grodno
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 2,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          The official heraldic symbols of the Grodno region - the coat of arms
          and the flag - are approved. The coat of arms depicts a golden bison head
          with silvery horns against the background of a red Varangian shield.
          The flag is a red cloth with the coat of arms of the region on it.
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
          Culture and sports in Grodno
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Belarus can be proud of its athletes on the world stage, and the authorities always
          support novice athletes. Every year the number of major international tournaments
          is growing, which is facilitated by the variety of sports sections in schools,
          as well as facilities of physical culture and sports significance.
          Among the largest sports grounds in Grodno is the Ice Sports Palace.
          The cultural life of the Belarusian people in Grodno is presented in the museum
          of expositions, the museum of life and history of Janusz Parulis,
          as well as in the Tizengauz gallery.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            p: 10,
            pt: 0,
            pb: 5,
            color: theme.palette.primary.main,
          }}
        >
          Transport links in Grodno
        </Typography>
        <Typography sx={{
          width: 'auto',
          pl: 10,
          pr: 10,
          pb: 5,
          color: 'rgba(0, 0, 0, 0.65)',
        }}
        >
          Grodno region has a developed road infrastructure. The region is crossed by international
          highways connecting the countries of Europe and the CIS. Grodno region has an extensive
          railway network. International lines connect the region with Poland and Lithuania.
          <br />
          <br />
          Grodno offers a wide range of public transport - anywhere in the city can be
          reached by bus, trolleybus or tram. outdoor areas like
          walking trails and parks often make up for it.
        </Typography>
      </Box>
    </>
  );
}
