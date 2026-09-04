export default function MeetSection() {
  return (
    <section className="mk-meet">
      <div className="mk-meet-text">
        <h2>Meet Minnie Kiddies</h2>
        <p>
          We Cater to All Your Kids' Back-to-School Needs:
          School Bags, Lunch Boxes, Water Bottles &amp; More.
          Located on Lagos Island.
        </p>
      </div>
      <div className="mk-meet-photos">
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&h=900&fit=crop&q=85"
          alt="Minnie Kiddies store front"
          className="mk-meet-photo"
        />
        <img
          src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=700&h=900&fit=crop&q=85"
          alt="Happy family with school supplies"
          className="mk-meet-photo"
        />
      </div>

      <style>{`
        .mk-meet {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
          padding: 44px 32px;
          background: #fff;
          border-top: 1px solid var(--mk-border);
        }
        .mk-meet-text h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 14px;
        }
        .mk-meet-text p {
          color: var(--mk-grey);
          line-height: 1.7;
          font-size: 14px;
          max-width: 380px;
          margin: 0;
        }
        .mk-meet-photos {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .mk-meet-photo {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 10px;
          display: block;
        }
        @media (max-width: 760px) {
          .mk-meet {
            grid-template-columns: 1fr;
            padding: 32px 20px;
          }
          .mk-meet-photos {
            order: -1;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }
        }
      `}</style>
    </section>
  )
}
