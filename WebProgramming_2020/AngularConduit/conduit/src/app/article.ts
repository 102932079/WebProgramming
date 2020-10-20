//when data comes in will around it, class interface,for multiple page
export interface ArticlesEnvelope{
    articles: Article[];
    articlesCount: number;
    //define articlescount in a number, not exceable
}

//warp for multiple data singular value
export interface Article {
    articleId?: number;
    title: string;
    description: string;
    body: string;
}

export interface ArticleEnvelope{
    article: Article;
}

export interface CreateAnonymousCommand{
    username: string;
    article: Article;
}
