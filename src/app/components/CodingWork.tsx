import { Terminal, Github, Code, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const codingActivities = [
  {
    icon: Terminal,
    title: 'Daily DSA Practice',
    description: 'Regular practice on data structures and algorithms including arrays, linked lists, trees, graphs, dynamic programming, and greedy algorithms.',
    // githubLink: 'https://github.com/viveksahu4/DSA-Data-Structure-Algo-'
  },
  {
    icon: Code,
    title: 'Algorithm Implementation',
    description: 'Writing efficient solutions for complex problems. Focus on time and space complexity optimization using C++ and Python.'
  },
  {
    icon: Github,
    title: 'Version Control',
    description: 'All coding work tracked on GitHub with clean commits. Building a strong portfolio of problem-solving and project contributions.'
  }
];

const codeSnippets = [
  {
    title: 'Binary Search',
    description: 'Logarithmic time complexity search algorithm in C++',
    code: `// Binary Search Implementation
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}`
  },
  {
    title: 'Merge Sort Subroutine',
    description: 'Merging two sorted arrays in Linear time in C++',
    code: `// Merge Sort Subroutine
void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> temp(r - l + 1);
    int i = l, j = m + 1, k = 0;
    
    while (i <= m && j <= r) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    
    while (i <= m) temp[k++] = arr[i++];
    while (j <= r) temp[k++] = arr[j++];
    
    for (int p = 0; p < temp.size(); p++)
        arr[l + p] = temp[p];
}`
  },
  {
    title: 'Depth First Search',
    description: 'Graph traversal algorithm using Recursion in C++',
    code: `// Depth First Search (DFS)
void dfs(int node, vector<vector<int>>& adj, 
         vector<bool>& visited, vector<int>& res) {
    visited[node] = true;
    res.push_back(node);
    
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            // Recursively visit unvisited nodes
            dfs(neighbor, adj, visited, res);
        }
    }
    
    // Backtrack if necessary
    return;
}`
  },
  {
    title: 'Quick Sort Partition',
    description: 'In-place partitioning logic for Quick Sort in C++',
    code: `// Quick Sort Partitioning
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}`
  },
  {
    title: 'Fibonacci Sequence',
    description: 'Dynamic Programming with Memoization in C++',
    code: `// Fibonacci Sequence (Memoization)
int fib(int n, vector<int>& dp) {
    if (n <= 1)
        return n;
        
    if (dp[n] != -1) {
        // Return already computed result
        return dp[n];
    }
    
    // Store result to avoid redundant work
    dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
    
    return dp[n];
}`
  }
];

export function CodingWork() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="coding" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold text-white mb-6 tracking-wide cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'var(--font-section)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            CODING PRACTICE & LOCAL DEVELOPMENT
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning through daily coding practice and algorithmic problem solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 group">
          {codingActivities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-50 hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:z-10"
            >
              <Card className="h-full border-gray-700 bg-gray-800 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-600/50 hover:-translate-y-1 flex flex-col">
                <CardHeader className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
                    <activity.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{activity.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">{activity.description}</CardDescription>
                </CardHeader>
                {activity.githubLink && (
                  <CardFooter className="pt-4 mt-auto">
                    <a href={activity.githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-800 bg-blue-950/30 text-blue-400 hover:bg-blue-900 hover:text-blue-300 hover:border-blue-500 transition-all group"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View on GitHub
                      </Button>
                    </a>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-gray-700 bg-black text-gray-100 hover:shadow-2xl hover:shadow-green-500/10 transition-shadow">
            <CardHeader className="min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSnippetIndex + '-title'}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardTitle className="text-white flex items-center gap-2 text-xl mb-1">
                    <Terminal className="w-5 h-5" />
                    {codeSnippets[currentSnippetIndex].title}
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    {codeSnippets[currentSnippetIndex].description}
                  </CardDescription>
                </motion.div>
              </AnimatePresence>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.pre
                  key={currentSnippetIndex + '-code'}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4 }}
                  className="text-sm overflow-x-auto p-4 bg-gray-950 rounded-lg border border-gray-800 min-h-[380px]"
                >
                  <code className="text-green-400">{codeSnippets[currentSnippetIndex].code}</code>
                </motion.pre>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 mb-4 text-lg">
            All coding practice and projects are version-controlled and available on GitHub
          </p>
          <a
            href="https://github.com/viveksahu4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold text-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}