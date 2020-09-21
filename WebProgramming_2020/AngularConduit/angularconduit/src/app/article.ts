// when data comes in will around it
// class interface
export interface ArticlesEnvelope
// for mutiple page
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
//warp for mutiple data singular value
export interface ArticlesEnvelope
{
    article: Articles;

}

// create another interface for object article (see schema)
export interface CreateAnonymousCommand
{
    //basic interface to let it work
    article: Articles;
    username: string;
}

// export interface ArticleData
// {

// }


// class interface
export interface Articles
{
    //  make id null in this case 
    // question mark here is for could be exist or sometime might not
    //articleId?: number | null;
    articleId?: number;
    title: string;
    // can not be comma , no ; yes
    // comma sort of working in interface
    description: string;
    body: string;
}