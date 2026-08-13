export type Service = {
  number: string;
  title: string;
  description: string;
  icon:
    | "mic"
    | "sliders"
    | "wave"
    | "music"
    | "arrange"
    | "scissors"
    | "file"
    | "keys";
};

export type Project = {
  title: string;
  artist: string;
  work: string;
  platform: "YouTube" | "Spotify";
  image: string;
  duration?: string;
  /** Add the final YouTube or Spotify URL when this project is published. */
  url?: string;
};

export const contact = {
  phone: "7973325297",
  email: "info.thirdeyemusicstudio@gmail.com",
  alternateEmail: "",
  instagram: "@thirdeye.musicstudio",
  whatsappUrl: "https://wa.me/917973325297",
  instagramUrl: "https://www.instagram.com/thirdeye.musicstudio",
};

export const services: Service[] = [
  {
    number: "01",
    icon: "mic",
    title: "Recording",
    description:
      "High quality recording of vocals and instruments in a comfortable studio environment.",
  },
  {
    number: "02",
    icon: "sliders",
    title: "Music Production",
    description:
      "Complete production of your song from the initial idea to a finished, release-ready production.",
  },
  {
    number: "03",
    icon: "wave",
    title: "Vocal Pitching",
    description:
      "Pitch correction and tuning of vocals to achieve clean, natural and polished results.",
  },
  {
    number: "04",
    icon: "music",
    title: "Beat / Instrumental Production",
    description:
      "Custom beats and instrumentals created for your song, project or artist.",
  },
  {
    number: "05",
    icon: "arrange",
    title: "Song Arrangement",
    description:
      "Structuring your song with the right flow, sections, transitions and musical direction.",
  },
  {
    number: "06",
    icon: "scissors",
    title: "Vocal Editing",
    description:
      "Cleaning, comping and preparing vocal takes for a smooth and professional final performance.",
  },
  {
    number: "07",
    icon: "file",
    title: "Demo Production",
    description:
      "Turning ideas, rough recordings or melodies into strong demos that clearly present your song.",
  },
  {
    number: "08",
    icon: "keys",
    title: "Music Programming",
    description:
      "MIDI programming, virtual instruments and drum programming to achieve the right sound for your track.",
  },
];

export const projects: Project[] = [
  {
    title: "Project Title 01",
    artist: "Artist / Client Name",
    work: "Recording, Production",
    platform: "YouTube",
    image: "/third-eye-music-recording-microphone.png",
    duration: "3:45",
    url: "https://www.youtube.com/results?search_query=Project+Title+01",
  },
  {
    title: "Project Title 02",
    artist: "Artist / Client Name",
    work: "Production, Arrangement",
    platform: "Spotify",
    image: "/e4953881-4c8f-459f-ae61-11c55f777240.png",
    url: "https://open.spotify.com/search/Project%20Title%2002",
  },
  {
    title: "Project Title 03",
    artist: "Artist / Client Name",
    work: "Recording, Production, Vocal Pitching",
    platform: "YouTube",
    image: "/third-eye-music-studio-wide.png",
    duration: "4:02",
    url: "https://www.youtube.com/results?search_query=Project+Title+03",
  },
];
