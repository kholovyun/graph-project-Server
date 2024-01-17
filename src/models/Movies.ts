import { prop, getModelForClass, modelOptions, Ref } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "genre" } })
export class Genre {
    @prop({ required: true })
    public name!: string;
}

@modelOptions({ schemaOptions: { collection: "movies" } })
export class Movie {
    @prop({ required: true })
    public title!: string;

    @prop()
    public poster?: string;

    @prop({ ref: () => Genre, required: true })
    public genre!: Ref<Genre>;
}

export const MovieModel = getModelForClass(Movie);
export const GenreModel = getModelForClass(Genre);
