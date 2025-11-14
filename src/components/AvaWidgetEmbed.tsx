

interface AvaWidgetEmbedProps {
  className?: string;
}

const AvaWidgetEmbed = ({ className = "" }: AvaWidgetEmbedProps) => {
  return (
    <div className={className}>
      <div className="AskAva-cta" data-product="creditTool" data-type="embed" data-widget-id="abe84ce31305"></div>
    </div>
  );
};

export default AvaWidgetEmbed;
