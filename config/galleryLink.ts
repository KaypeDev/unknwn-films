import HeritageThumb from '@/public/img/HeritageThumb.png'
import NeauxThumbnail from '@/public/img/NeauxThumbnail.png'
import JacobThumbnail from '@/public/img/JacobThumbnail.png'
import ValciteeThumbnail from '@/public/img/ValciteeThumbnail.png'
import { StaticImageData } from 'next/image'

export interface GalleryItem {
    title: string;
    date: string;
    poster: string | StaticImageData;
    videoUrl: string;
    link?: string;
}

export const gallery: GalleryItem[] = [
    {
        title: 'Jacob Highlights',
        date: '2025-01-11',
        poster: JacobThumbnail,
        videoUrl: 'https://pub-e88abf8aeed146d0a981deab0bba9b23.r2.dev/Jacob.mp4',
        link: 'https://www.instagram.com/reel/DEtoxPSR_NM/',
    },
    {
        title: 'Neaux Doubt Pop-up',
        date: '2025-02-18',
        poster: NeauxThumbnail,
        videoUrl: 'https://pub-e88abf8aeed146d0a981deab0bba9b23.r2.dev/Neaux.mp4',
        link: 'https://www.instagram.com/p/DGOWNiwyi4R/',
    },
    {
        title: 'Valcitee',
        date: '2025-01-29',
        poster: ValciteeThumbnail,
        videoUrl: 'https://pub-e88abf8aeed146d0a981deab0bba9b23.r2.dev/Valcitee.mp4',
        link: 'https://www.instagram.com/reel/DFbgs0iSCgR/',
    },
    {
        title: "Heritage In Motion",
        date: '2024-12-19',
        poster: HeritageThumb,
        videoUrl: 'https://pub-e88abf8aeed146d0a981deab0bba9b23.r2.dev/Heritage.mp4',
        link: 'https://www.instagram.com/reel/DDx-RHjycTM/',
    },
];