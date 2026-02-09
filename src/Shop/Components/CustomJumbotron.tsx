

interface Props {
    title: string;
    subtitle?: string;
}

export const CustomJumbotron = ({title, subtitle}: Props) => {

  const subtitleSecond = "Ropa minimalista y elegante inspirada en el diseño futurista. Calidad premium para un estilo atemporal."
  return (
    <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-montserrat tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitleSecond || subtitle}
          </p>
        </div>
      </section>
  )
}
