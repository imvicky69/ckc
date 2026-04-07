export default function Footer() {
  return (
    <footer className="site-footer mt-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex w-full justify-between gap-8 footer-cols">
          <div className="flex-1">
            <div className="text-xl font-semibold">Concept King</div>
            <p className="mt-3 text-sm text-slate-600">Premium coaching and mentorship to unlock your potential.</p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-medium">Company</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Blog</li>
                <li>Courses</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Concept King. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
