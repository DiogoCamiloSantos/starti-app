import { useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { useDispatch } from 'react-redux';
import darkTheme from "../../common/theme/dark-theme";
import lightTheme from "../../common/theme/light-theme";
import Card from "../../components/Card/Card";
// API Fetch Function
const fetchNews = async (page, pageSize) => {
    // Simulando um fetch da API com JSON fornecido
    const data = [
      {
        id: "a38b3b4c-b84a-4d3b-9f72-4a8b4a4f5d3b",
        title: "Introduction to Programming",
        content:
          "This article covers the basics of programming, including what programming is and why it is important.",
        author: "Jane Doe",
      },
      {
        id: "884e4d93-3a31-48d4-88f1-e02be1219e29",
        title: "Introduction to Programming",
        content:
          "This article covers the basics of programming, including what programming is and why it is important.",
        author: "Jane Doe",
      },
      {
        id: "29b59221-82e5-4e37-88b9-04f02cf12w",
        title: "Introduction to Debugging",
        content:
          "Learn how to debug your programs, including common tools and techniques.",
        author: "Mark Thomas",
      },
      {
        id: "29b59221-82e5-4e37-88b9-04f02cf12cbg",
        title: "Introduction to Debugging",
        content:
          "Learn how to debug your programs, including common tools and techniques.",
        author: "Mark Thomas",
      },
      {
        id: "29b59221-82e5-4e37-88b9-04f02cf12cbh",
        title: "Introduction to Debugging",
        content:
          "Learn how to debug your programs, including common tools and techniques.",
        author: "Mark Thomas",
      },
      {
        id: "29b59221-82e5-4e37-88b9-04f02cf12cbj",
        title: "Introduction to Debugging",
        content:
          "Learn how to debug your programs, including common tools and techniques.",
        author: "Mark Thomas",
      },
      {
        id: "29b59221-82e5-4e37-88b9-04f02cf12cbk",
        title: "Introduction to Debugging",
        content:
          "Learn how to debug your programs, including common tools and techniques.",
        author: "Mark Thomas",
      },
      {
        id: "29b59221-82e5-4e37-88b9-04f02cf12cbq",
        title: "Introduction to Debugging",
        content:
          "Learn how to debug your programs, including common tools and techniques.",
        author: "Mark Thomas",
      },
      {
        id: "29b59221-82e5-4e37-88b9-04f02cf12cbl",
        title: "Introduction to Debugging",
        content:
          "Learn how to debug your programs, including common tools and techniques.",
        author: "Mark Thomas",
      }
    ];
  
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
  
    // Simula um pequeno atraso
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    return data.slice(start, end);
  };

export default function HomePage() {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
  

    const [theme, setTheme] = useState('light');

    const dispatch = useDispatch();

    const toggleTheme = () => {
        setTheme((theme == 'light') ? 'dark' : 'light');
        dispatch({ type: 'TOGGLE_THEME', payload: (theme == 'light' ? lightTheme : darkTheme) });        
    };

  const loadMoreNews = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const newItems = await fetchNews(page, 6); // 5 itens por página
      setNews((prev) => [...prev, ...newItems]);

      if (newItems.length < 2) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
    } finally {
      setLoading(false);
    }
  };
    

    return (
      <View>
        <FlatList
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, marginVertical: 5 }}>
                {item.content}
              </Text>
              <Text style={{ fontStyle: "italic", color: "gray" }}>
                By {item.author}
              </Text>
            </Card>
          )}
          onEndReached={loadMoreNews}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
          }
          ListEmptyComponent={
            !loading ? <Text>Nenhuma notícia disponível.</Text> : null
          }
        />
      </View>
    );
}