import Input from '../../components/common/input/Input';

function Home() {
  return (
    <main>
      <section>
        <form>
          <Input
            configs={{
              type: 'text',
              value: '',
            }}
          />
          <Input
            configs={{
              type: 'text',
              value: '',
            }}
          />
        </form>
      </section>
    </main>
  );
}

export default Home;
