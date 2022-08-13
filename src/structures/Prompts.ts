const general: Prompt[] = [
    {
        question: "Why should I use/need MultiPaper?",
        answer: "MultiPaper is generally recommended for server admins with high-player counts who are looking to push past the player limitations imposed by most other Paper forks."
    },
    {
        question: "What versions are supported?",
        answer: "MultiPaper supports versions 1.18.2 - 1.19.2"
    },
    {
        question: "Why is there still no support for version 1.X?",
        answer: "This project is maintained by a single developer and thus support for the latest versions will take time so please be patient."
    },
    {
        question: "Will there ever be support for older versions?",
        answer: "There is currently no plan to support older versions but you are welcome to write your own implementations."
    },

    {
        question: "Will this lower ping between geographically split players?",
        answer: "No it will not and this setup is not recommended. Ideally, you should set up the master and node servers on the same machine to avoid synchronization issues."
    }]

const master: Prompt[] = [
    {
        question: "Do I need the master server?",
        answer: "Yes, the master server is a necessary component in synchronizing and storing data across nodes. For more information, please read about [how MultiPaper works](https://multipaper.io/howitworks.html)"
    },
    {
        question: "How do I run the master server?",
        answer: "The master server can be run as a standalone program, BungeeCord or Velocity plugin."
    },
    {
        question: "What resources should I allocate to the master server?",
        answer: "Unfortunately, allocations differ for each person as well as what hardware is being used. Generally speaking, very little CPU and RAM is needed when running it as a standalone program. However, it is strongly recommended to allocate more storage as world files are stored on the master server."
    },
    {
        question: "How do I connect to the master server?",
        answer: "You don't. The master acts like a proxy that will connect you to a node node. To learn more, please read see [how MultiPaper works](https://multipaper.io/howitworks.html)"
    }]

const node: Prompt[] = [
    {
        question: "How many nodes should I have?",
        answer: "Again, that differs for each use case but you should have at least two. Having one node defeats the purpose of MultiPaper. Consider switching to a different Paper fork if you find yourself in this situation. However, a general rule to follow is: the more players, the more nodes needed."
    },
    {
        question: "Help! Some of my folders are empty!",
        answer: "This is normal as the majority of data is stored on the master server"
    },
    {
        question: "I can't connect to any of the nodes",
        answer: "Ensure that you're not *directly* connecting to any of the nodes. You should be connecting to the master which will forward you to one of the nodes."
    }]

const plugins: Prompt[] = [
    {
        question: "Why doesn't _______ plugin work?",
        answer: "Most Spigot plugins were not designed to work in a multi-server environment and are unlikely to work."
    },
    {
        question: "Which plugins work?",
        answer: "Please see <@937326705004118037>. If you find a plugin that works, feel free to share what works, any issues that occur and any workarounds."
    },
    {
        question: "Is there anything that can be done?",
        answer: "Generally speaking, a fork of that plugin will need to be made in order to support syncing between the nodes. Consider using [MultiLib](https://github.com/PureGero/MultiLib) to help you with this process."
    }]

export const faq: Prompt[][] = [general, master, node, plugins]

export type Prompt = {
    question: string,
    answer: string,
}