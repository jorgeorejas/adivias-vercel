import Layout from '@/components/Layout';
const Feature = {
  Dashboard: {
    title: 'Dashboard',
    description:
      'Adivias gives you access to a dashboard to visually see all your stats.',
    Item1: {
      title: 'Id qui dolor',
      description:
        'Id qui dolor pariatur aute incididunt adipisicing qui laboris.'
    },
    Item2: {
      title: 'Nulla velit',
      description:
        'Nulla velit cupidatat magna enim consequat cillum incididunt est sunt nisi incididunt.'
    },
    Item3: {
      title: 'Quis laborum',
      description: 'Quis laborum ad Lorem sit officia sit cupidatat excepteur.'
    }
  },
  AutoPublish: {
    title: 'Auto Publish',
    description:
      'Adivias has an included tool that alows you to create your links page to show in your social media bio.',
    Item1: {
      title: 'Id qui dolor',
      description:
        'Id qui dolor pariatur aute incididunt adipisicing qui laboris.'
    },
    Item2: {
      title: 'Nulla velit',
      description:
        'Nulla velit cupidatat magna enim consequat cillum incididunt est sunt nisi incididunt.'
    },
    Item3: {
      title: 'Quis laborum',
      description: 'Quis laborum ad Lorem sit officia sit cupidatat excepteur.'
    }
  },
  LinksPage: {
    title: 'Links Page',
    description:
      'Adivias has an included tool that alows you to create your links page to show in your social media bio.',
    Item1: {
      title: 'Id qui dolor',
      description:
        'Id qui dolor pariatur aute incididunt adipisicing qui laboris.'
    },
    Item2: {
      title: 'Nulla velit',
      description:
        'Nulla velit cupidatat magna enim consequat cillum incididunt est sunt nisi incididunt.'
    },
    Item3: {
      title: 'Quis laborum',
      description: 'Quis laborum ad Lorem sit officia sit cupidatat excepteur.'
    }
  }
};

function FeatureSection(props) {
  const { name, side } = props;
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={`${side === 'left' ? 'order-first' : 'order-last'}`}>
        <h1 className="text-2xl font-semibold">{Feature[name].title}</h1>
        <p className="text-lg">{Feature[name].description}</p>
        <ul>
          <li>
            <span className="text-bold">{Feature[name].Item1.title}:</span>{' '}
            <span>{Feature[name].Item1.description}</span>
          </li>
        </ul>
      </div>
      <div className={`${side === 'left' ? 'order-last' : 'order-first'}`}>
        <img src="/Adivias.jpeg" className="border rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default function features() {
  return (
    <>
      <Layout>
        <section className="flex flex-col max-w-5xl min-h-screen gap-4 m-auto">
          <FeatureSection name="Dashboard" side="left" />
          <FeatureSection name="AutoPublish" side="right" />
          <FeatureSection name="LinksPage" side="left" />
          <FeatureSection name="LinksPage" side="right" />
        </section>
      </Layout>
    </>
  );
}
