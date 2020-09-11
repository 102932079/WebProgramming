// when data comes in will around it
// class interface
export interface ArticlesEnvelope
{
    articles: ArticlesEnvelope[];
    // define articlescount is a number
    articlesCount: number;
    // not exceable
    // hello()
    // {
    //     console.log(this.articlesCount);
    // }
}

/
// class interface
export interface Articles
{
    articleId: number;
    title: string;
}