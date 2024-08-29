import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { IMovieModel } from "@/types/Movie";
import Link from "next/link";
import { StarRating } from "./star-rating";

interface MovieCardProps {
  movie: IMovieModel;
}

export const MovieCard = (props: MovieCardProps) => {
  const movie = props.movie;

  const synopsisStyled = <strong>Sinopse: </strong>;

  return (
    <li className="">
      <Dialog>
        <DialogTrigger asChild>
          <Link href={""}>
            <Card className="group">
              <CardHeader className="px-0 pt-0">
                <div className="overflow-hidden rounded-t-xl">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-full object-cover transition-all group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="truncate font-bold text-primary">
                  {movie.title}
                </CardTitle>
                <CardDescription className="truncate">
                  {movie.overview.length > 0
                    ? movie.overview
                    : "Não há uma sinopse disponível para este título."}
                </CardDescription>
                <div className="flex flex-col items-start justify-start gap-2">
                  <span className="text-xs text-muted-foreground">
                    <strong>Lançamento:</strong>{" "}
                    {new Date(movie.release_date).toLocaleDateString("pt-BR")}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    <strong>Nota:</strong> {movie.vote_average.toPrecision(2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </DialogTrigger>
        <DialogContent className="group">
          <DialogHeader>
            <div className="overflow-hidden py-6">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full object-cover transition-all group-hover:opacity-80"
              />
            </div>
            <DialogTitle className="text-2xl font-bold text-primary">
              {movie.title}
            </DialogTitle>
            <DialogDescription>
              {movie.overview.length > 0
                ? `Sinopse: ${movie.overview}`
                : "Não há uma sinopse disponível para este título."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <span className="text-xs text-muted-foreground">
                <strong>Lançamento:</strong>{" "}
                {new Date(movie.release_date).toLocaleDateString("pt-BR")}
              </span>
              <span className="flex gap-1 text-xs text-muted-foreground">
                <strong>Nota:</strong>{" "}
                <StarRating rating={movie.vote_average} />
              </span>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </li>
  );
};
