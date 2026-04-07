import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  return (
    <div className="py-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight">Premium coaching for ambitious learners</h1>
          <p className="mt-4 text-slate-600">High-quality courses, 1:1 mentorship and project reviews to help you excel.</p>
          <div className="mt-6 flex gap-4">
            <Button>Explore Courses</Button>
            <Button className="btn-ghost">Contact Us</Button>
          </div>
        </div>

        <div>
          <Card>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Join the waitlist</label>
                <Input placeholder="your@email.com" type="email" />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Join</Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
