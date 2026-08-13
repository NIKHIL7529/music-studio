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
  whatsappMessage: string;
};

export type Project = {
  title: string;
  artist: string;
  work: string;
  platform?: string;
  image: string;
  duration?: string;
  /** Add any public project URL here. */
  url?: string;
  actionLabel?: string;
};

export const contact = {
  phone: "7973325297",
  email: "info.thirdeyemusicstudio@gmail.com",
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
    whatsappMessage: "Hi Third Eye Music, I would like to enquire about Recording.",
  },
  {
    number: "02",
    icon: "sliders",
    title: "Music Production",
    description:
      "Complete production of your song from the initial idea to a finished, release-ready production.",
    whatsappMessage: "Hi Third Eye Music, I would like to enquire about Music Production.",
  },
  {
    number: "03",
    icon: "wave",
    title: "Vocal Pitching",
    description:
      "Pitch correction and tuning of vocals to achieve clean, natural and polished results.",
    whatsappMessage: "Hi Third Eye Music, I would like to enquire about Vocal Pitching.",
  },
  {
    number: "04",
    icon: "music",
    title: "Beat / Instrumental Production",
    description:
      "Custom beats and instrumentals created for your song, project or artist.",
    whatsappMessage: "Hi Third Eye Music, I would like to enquire about Beat / Instrumental Production.",
  },
  {
    number: "05",
    icon: "arrange",
    title: "Song Arrangement",
    description:
      "Structuring your song with the right flow, sections, transitions and musical direction.",
    whatsappMessage: "Hi Third Eye Music, I would like to enquire about Song Arrangement.",
  },
  {
    number: "06",
    icon: "scissors",
    title: "Vocal Editing",
    description:
      "Cleaning, comping and preparing vocal takes for a smooth and professional final performance.",
    whatsappMessage: "Hi Third Eye Music, I would like to enquire about Vocal Editing.",
  },
  {
    number: "07",
    icon: "file",
    title: "Demo Production",
    description:
      "Turning ideas, rough recordings or melodies into strong demos that clearly present your song.",
    whatsappMessage: "Hi Third Eye Music, I would like to enquire about Demo Production.",
  },
];

export const projects: Project[] = [
  {
    title: "Project Title 01",
    artist: "Artist / Client Name",
    work: "Recording, Production",
    image: "/third-eye-music-recording-microphone.png",
    duration: "3:45",
    url: "https://www.youtube.com/results?search_query=Project+Title+01",
  },
  {
    title: "Project Title 02",
    artist: "Artist / Client Name",
    work: "Production, Arrangement",
    image: "/e4953881-4c8f-459f-ae61-11c55f777240.png",
    url: "https://open.spotify.com/search/Project%20Title%2002",
  },
  {
    title: "Project Title 03",
    artist: "Artist / Client Name",
    work: "Recording, Production, Vocal Pitching",
    image: "/third-eye-music-studio-wide.png",
    duration: "4:02",
    url: "https://www.youtube.com/results?search_query=Project+Title+03",
  },
];
