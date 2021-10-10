import RecentPostList from "../components/RecentPostList";

export const Home = () => {
    return (
        <RecentPostList posts={[
            {
                "id": 1,
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "summary": "Duis elementum euismod porttitor. Etiam rutrum fermentum lobortis sed consectetur porttitor nisl lacinia.",
                "author_name": "Anderson",
                "created_date": "27 de Setembro de 2021",
            },
            {
                "id": 2,
                "title": "Praesent ex quam, feugiat ut tortor id, ultrices vehicula mauris",
                "summary": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eget diam eros",
                "author_name": "Anderson",
                "created_date": "26 de Setembro de 2021",
            },
            {
                "id": 3,
                "title": "Mauris arcu dolor, tincidunt eget quam nec, sodales interdum orci",
                "summary": "Aliquam et molestie eros, eget lobortis sapien cras placerat ipsum at enim consequat, vel interdum nunc tincidunt",
                "author_name": "Anderson",
                "created_date": "24 de Setembro de 2021",
            }
        ]} />
    )
};
