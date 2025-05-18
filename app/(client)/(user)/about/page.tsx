import Container from "@/components/Container";

const AboutPage = () => {
  return (
    <div className="">
      <Container className="max-w-6xl lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">About AyurWeave</h1>
        <p className="font-bold mb-4">
        Welcome to AyurWeave – Weaving Wellness the Ayurvedic Way
        </p>
        <p className="mb-4">
        At AyurWeave, we believe in the timeless power of Ayurveda to bring balance, harmony, and natural healing into modern lifestyles. Rooted in ancient wisdom and inspired by nature, our mission is to offer authentic Ayurvedic products that nurture the body, mind, and spirit.
        </p>
        <p>
        Every product in our collection is carefully curated and crafted using traditional Ayurvedic principles and high-quality natural ingredients. From herbal supplements and wellness teas to skincare and personal care solutions, AyurWeave is your trusted partner on the journey to holistic health.
        </p>
        <br></br>
        <p>
        We’re more than just a brand—we are a movement towards conscious living, sustainability, and self-care. Our name, AyurWeave, symbolizes the intricate connection between ancient healing and everyday life—interlacing tradition with today’s wellness needs.
        </p>
        <br></br>
        <p className="font-bold mb-4">
        Join us as we revive the essence of Ayurveda and help you reconnect with your natural state of well-being.
        </p>
      </Container>
    </div>
  );
};

export default AboutPage;
