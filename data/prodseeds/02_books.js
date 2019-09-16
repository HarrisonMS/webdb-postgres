exports.seed = function(knex, Promise) {
  return knex('books').del()
    .then(() => knex('books').insert([
      // 1
      {
        title: 'Classical Mechanics',
        isbn: '9781891389221',
        cover_url: 'https://www.uscibooks.com/taycm.jpg',
        publisher_id: 1,
        edition: "1",
        year: 2005,
        featured: true,
        description: "John Taylor has brought to his most recent book, Classical Mechanics, all of the clarity and insight that made his Introduction to Error Analysis a best-selling text."
      },
      // 2
      {
        title: 'The Great Conversation: A Historical Introduction to Philosophy',
        isbn: '9780195397611',
        cover_url: 'http://covers.openlibrary.org/b/isbn/9780195397611-L.jpg',
        publisher_id: 2,
        edition: "6",
        year: 2010,
        featured: true,
        description: "Now in its sixth edition, this historically organized introductory text treats philosophy as a dramatic and continuous story--a conversation about humankind's deepest and most persistent concerns. Tracing the exchange of ideas among history's key philosophers, The Great Conversation: A Historical Introduction to Philosophy, Sixth Edition, demonstrates that while constructing an argument or making a claim, one philosopher almost always has others in mind. The book addresses the fundamental questions of human life: Who are we? What can we know? How should we live? and What sort of reality do we inhabit?"
      },
      // 3
      {
        title: 'Cognitive Science: An Introduction to the Science of the Mind',
        isbn: '9780521882002',
        cover_url: 'https://i.imgur.com/hfffR97.jpg',
        publisher_id: 2,
        edition: "0",
        year: 2010,
        featured: false,
        description: "Cognitive science is at last treated as a unified subject in this exciting textbook. Students are introduced to the techniques and main theoretical models of the cognitive scientist's toolkit, and shown how this vibrant science is applied to unlock the mysteries of the human mind."
      },
      // 4
      {
        title: 'Introduction to Statistical Inference',
        isbn: '9780387964201',
        cover_url: 'http://covers.openlibrary.org/b/isbn/9780387964201-L.jpg',
        publisher_id: 3,
        edition: "0",
        year: 1987,
        featured: true,
        description: "This book is based upon lecture notes developed by Jack Kiefer for a course in statistical inference he taught at Cornell University. The notes were distributed to the class in lieu of a textbook, and the problems were used for homework assignments. Relying only on modest prerequisites of probability theory and calculus, Kiefer's approach to a first course in statistics is to present the central ideas of the modem mathematical theory with a minimum of fuss and formality. He is able to do this by using a rich mixture of examples, pictures, and math­ ematical derivations to complement a clear and logical discussion of the important ideas in plain English. The straightforwardness of Kiefer's presentation is remarkable in view of the sophistication and depth of his examination of the major theme: How should an intelligent person formulate a statistical problem and choose a statistical procedure to apply to it? Kiefer's view, in the same spirit as Neyman and Wald, is that one should try to assess the consequences of a statistical choice in some quantitative (frequentist) formulation and ought to choose a course of action that is verifiably optimal (or nearly so) without regard to the perceived attractiveness of certain dogmas and methods."
      },
      // 5
      {
        title: 'Introduction to Electrodynamics',
        isbn: '9781108420419',
        cover_url: 'https://www.pearsonhighered.com/assets/bigcovers/0/3/2/1/0321856562.jpg',
        publisher_id: 2,
        edition: "4",
        year: 2017,
        featured: false,
        description: "This well-known undergraduate electrodynamics textbook is now available in a more affordable printing from Cambridge University Press. The Fourth Edition provides a rigorous, yet clear and accessible treatment of the fundamentals of electromagnetic theory and offers a sound platform for explorations of related applications (AC circuits, antennas, transmission lines, plasmas, optics and more). Written keeping in mind the conceptual hurdles typically faced by undergraduate students, this textbook illustrates the theoretical steps with well-chosen examples and careful illustrations. It balances text and equations, allowing the physics to shine through without compromising the rigour of the math, and includes numerous problems, varying from straightforward to elaborate, so that students can be assigned some problems to build their confidence and others to stretch their minds. A Solutions Manual is available to instructors teaching from the book; access can be requested from the resources section at www.cambridge.org/electrodynamics."
      },
      // 6
      {
        title: 'Introduction to Quantum Mechanics',
        isbn: '9781107179868',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/51zU2Qe%2B5cL._SX358_BO1,204,203,200_.jpg',
        publisher_id: 2,
        edition: "2",
        year: 2016,
        featured: true,
        description: "This bestselling undergraduate quantum mechanics textbook is now available in a re-issued, affordable edition from Cambridge University Press. The text first teaches students how to do quantum mechanics, and then provides them with a more insightful discussion of what it means. The author avoids the temptation to include every possible relevant topic, instead presenting students with material that they can easily focus on in a complete treatment with few distractions and diversions. Fundamental principles are covered, quantum theory is presented, and special techniques are developed for attacking realistic problems. The innovative two-part coverage is entertaining and informative, organizing topics under basic theory and assembling an arsenal of approximation schemes with illustrative applications linked closely to the text."
      },
      // 7
      {
        title: 'Elements of Clojure',
        isbn: '9780359360581',
        cover_url: 'https://i.imgur.com/qN5lLHl.png',
        publisher_id: 4,
        edition: "0",
        year: 2019,
        featured: false,
        description: "This book tries to put words to what most experienced programmers already know. It provides a framework for making better design choices, and a vocabulary for teams to discuss the software they collaborate on."
      },
      // 8
      {
        title: 'Web Development with Clojure: Build Bulletproof Web Apps with Less Code',
        isbn: '9781680500820',
        cover_url: 'https://i.imgur.com/4iqzv5R.jpg',
        publisher_id: 5,
        edition: "2",
        year: 2016,
        featured: false,
        description: "Modern web applications deserve modern tools. Harness the JVM's rich infrastructure while taking advantage of the expressive power and brisk performance of a modern functional language. Exploit Clojure's unique advantages for web development. Step by step, apply the fundamentals of programming in Clojure to build real-world, professional web applications. This edition features new libraries, tools, and best practices, and focuses on developing modern single-page applications."
      },
      // 9
      {
        title: 'Introduction to Algorithms',
        isbn: '9780262033848',
        cover_url: 'https://i.imgur.com/DoEzDIG.jpg',
        publisher_id: 6,
        edition: "3",
        year: 2009,
        featured: false,
        description: "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor."
      },
      // 10
      {
        title: 'Cracking the Coding Interview: 189 Programming Questions and Solutions',
        isbn: '9780984782857',
        cover_url: 'https://i.imgur.com/42dOzlp.jpg',
        publisher_id: 7,
        edition: "6",
        year: 2015,
        featured: false,
        description: `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.

Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.

Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.`
      },
      // 11
      {
        title: 'The Little Schemer',
        isbn: '9780262560993',
        cover_url: 'https://i.imgur.com/oQxYFJI.jpg',
        publisher_id: 6,
        edition: "4",
        year: 1995,
        featured: false,
        description: "The notion that 'thinking about computing is one of the most exciting things the human mind can do' sets both The Little Schemer (formerly known as The Little LISPer) and its new companion volume, The Seasoned Schemer, apart from other books on LISP. The authors' enthusiasm for their subject is compelling as they present abstract concepts in a humorous and easy-to-grasp fashion. Together, these books will open new doors of thought to anyone who wants to find out what computing is really about. The Little Schemer introduces computing as an extension of arithmetic and algebra; things that everyone studies in grade school and high school. It introduces programs as recursive functions and briefly discusses the limits of what computers can do. The authors use the programming language Scheme, and interesting foods to illustrate these abstract ideas. The Seasoned Schemer informs the reader about additional dimensions of computing: functions as values, change of state, and exceptional cases. The Little LISPer has been a popular introduction to LISP for many years. It had appeared in French and Japanese. The Little Schemer and The Seasoned Schemer are worthy successors and will prove equally popular as textbooks for Scheme courses as well as companion texts for any complete introductory course in Computer Science."
      },
      // 12
      {
        title: 'Structure and Interpretation of Computer Programs',
        isbn: '9780262510875',
        cover_url: 'https://i.imgur.com/2qtWhng.jpg',
        publisher_id: 6,
        edition: "2",
        year: 1996,
        featured: false,
        description: "Structure and Interpretation of Computer Programs has had a dramatic impact on computer science curricula over the past decade. This long-awaited revision contains changes throughout the text. There are new implementations of most of the major programming systems in the book, including the interpreters and compilers, and the authors have incorporated many small changes that reflect their experience teaching the course at MIT since the first edition was published. A new theme has been introduced that emphasizes the central role played by different approaches to dealing with time in computational models: objects with state, concurrent programming, functional programming and lazy evaluation, and nondeterministic programming. There are new example sections on higher-order procedures in graphics and on applications of stream processing in numerical programming, and many new exercises. In addition, all the programs have been reworked to run in any Scheme implementation that adheres to the IEEE standard."
      },
      // 13
      {
        title: 'The Elements of Style',
        isbn: '9780205309023',
        cover_url: 'https://i.imgur.com/T9Iu3FU.jpg',
        publisher_id: 8,
        edition: "4",
        year: 2019,
        featured: false,
        description: "You know the authors' names. You recognize the title. You've probably used this book yourself. This is The Elements of Style, the classic style manual, now in a fourth edition. A new Foreword by Roger Angell reminds readers that the advice of Strunk & White is as valuable today as when it was first offered.This book's unique tone, wit and charm have conveyed the principles of English style to millions of readers. Use the fourth edition of 'the little book' to make a big impact with writing."
      },
      // 14
      {
        title: 'Introduction to Linear Algebra',
        isbn: '9780980232776',
        cover_url: 'https://i.imgur.com/tQCbbgj.jpg',
        publisher_id: 9,
        edition: "5",
        year: 2016,
        featured: false,
        description: `Gilbert Strang's textbooks have changed the entire approach to learning linear algebra -- away from abstract vector spaces to specific examples of the four fundamental subspaces: the column space and nullspace of A and A'.

This new fifth edition has become more than a textbook for the basic linear algebra course. That is its first purpose and always will be. The new chapters about applications of the SVD, probability and statistics, and Principal Component Analysis in finance and genetics, make it also a textbook for a second course, plus a resource at work. Linear algebra has become central in modern applied mathematics. This book supports the value of understanding linear algebra.

Introduction to Linear Algebra, Fifth Edition includes challenge problems to complement the review problems that have been highly praised in previous editions. The basic course is followed by eight applications: differential equations in engineering, graphs and networks, statistics, Fourier methods and the FFT, linear programming, computer graphics, cryptography, Principal Component Analysis, and singular values.`
      },
      // 15
      {
        title: 'Programming Rust: Fast, Safe Systems Development',
        isbn: '9781491927281',
        cover_url: 'https://i.imgur.com/D8yKfaF.jpg',
        publisher_id: 10,
        edition: "1",
        year: 2017,
        featured: false,
        description: `Rust is a new systems programming language that combines the performance and low-level control of C and C++ with memory safety and thread safety. Rust’s modern, flexible types ensure your program is free of null pointer dereferences, double frees, dangling pointers, and similar bugs, all at compile time, without runtime overhead. In multi-threaded code, Rust catches data races at compile time, making concurrency much easier to use.

Written by two experienced systems programmers, this book explains how Rust manages to bridge the gap between performance and safety, and how you can take advantage of it. Topics include:

    - How Rust represents values in memory (with diagrams)
    - Complete explanations of ownership, moves, borrows, and lifetimes
    - Cargo, rustdoc, unit tests, and how to publish your code on crates.io, Rust’s public package repository
    - High-level features like generic code, closures, collections, and iterators that make Rust productive and flexible
    - Concurrency in Rust: threads, mutexes, channels, and atomics, all much safer to use than in C or C++
    - Unsafe code, and how to preserve the integrity of ordinary code that uses it
    - Extended examples illustrating how pieces of the language fit together`
      },
      // 16
      {
        title: 'A Fake Book',
        isbn: '2222222222222',
        cover_url: 'https://www.uscibooks.com/taycm.jpg',
        publisher_id: 1,
        edition: "1",
        year: 2005,
        featured: true,
        description: "This is not a real book"
      },
    ]));
};
